const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/to-red-950/g, 'to-brand-hover');
  content = content.replace(/shadow-red-950\/40/g, 'shadow-brand/20');
  content = content.replace(/from-red-950\/30/g, 'from-brand-muted/30');
  
  // Leftover slate classes from CTASection and PageHero
  content = content.replace(/from-slate-900 via-slate-900 to-brand-hover/g, 'from-dark-900 via-dark-800 to-dark-900');
  content = content.replace(/via-slate-900\/70/g, 'via-dark-800/70');
  content = content.replace(/to-slate-950/g, 'to-dark-950');

  // Any remaining generic red replacements
  content = content.replace(/red-700/g, 'brand-hover');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Cleaned up ${file}`);
  }
});
console.log('Cleanup complete.');
