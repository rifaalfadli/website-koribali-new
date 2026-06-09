const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src').concat(['./index.html']);

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace red with blue
  content = content.replace(/red-50/g, 'blue-50');
  content = content.replace(/red-100/g, 'blue-100');
  content = content.replace(/red-200/g, 'blue-200');
  content = content.replace(/red-300/g, 'blue-300');
  content = content.replace(/red-400/g, 'blue-400');
  content = content.replace(/red-500/g, 'blue-500');
  content = content.replace(/red-600/g, 'blue-600');
  content = content.replace(/red-700/g, 'blue-700');
  content = content.replace(/red-800/g, 'blue-800');
  content = content.replace(/red-900/g, 'blue-900');
  content = content.replace(/red-950/g, 'blue-950');

  // Replace slate darks to be lighter
  content = content.replace(/slate-800/g, 'slate-700');
  content = content.replace(/slate-900/g, 'slate-800');
  content = content.replace(/slate-950/g, 'slate-900');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Replacement complete.');
