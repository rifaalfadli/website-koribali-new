const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.jsx')) results.push(file);
  });
  return results;
}

const shadowRegex = /\b(?:[a-zA-Z0-9_-]+:)*shadow(?:-[a-zA-Z0-9/.-]+)?\b/g;

walk('./src').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let orig = content;

  // Process `<button ...>` tags
  content = content.replace(/(<button[^>]+className=(["'{`]))([^"'}]+)(["'`}])/gi, (match, prefix, quote, classes, suffix) => {
    const newClasses = classes.replace(shadowRegex, '').replace(/\s+/g, ' ').trim();
    return `${prefix}${newClasses}${suffix}`;
  });

  // Process `<Link ...>` tags that look like buttons (have padding and background)
  content = content.replace(/(<Link[^>]+className=(["'{`]))([^"'}]+)(["'`}])/gi, (match, prefix, quote, classes, suffix) => {
    if (/\bbg-/.test(classes) && /\b(px-|py-|p-)/.test(classes)) {
      const newClasses = classes.replace(shadowRegex, '').replace(/\s+/g, ' ').trim();
      return `${prefix}${newClasses}${suffix}`;
    }
    return match;
  });
  
  // Process `<a ...>` tags that look like buttons
  content = content.replace(/(<a[^>]+className=(["'{`]))([^"'}]+)(["'`}])/gi, (match, prefix, quote, classes, suffix) => {
    if (/\bbg-/.test(classes) && /\b(px-|py-|p-)/.test(classes)) {
      const newClasses = classes.replace(shadowRegex, '').replace(/\s+/g, ' ').trim();
      return `${prefix}${newClasses}${suffix}`;
    }
    return match;
  });

  if (orig !== content) {
    fs.writeFileSync(file, content);
    console.log('Removed shadows from buttons in', file);
  }
});
