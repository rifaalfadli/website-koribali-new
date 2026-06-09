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

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Change hover effect to be slightly darker instead of lighter for a professional look
  content = content.replace(/hover:from-blue-400 hover:to-blue-500/g, 'hover:from-blue-600 hover:to-blue-700');
  
  // Reduce glow intensity slightly by making the shadow darker blue instead of bright blue
  content = content.replace(/shadow-blue-500\/30/g, 'shadow-blue-700/20');
  content = content.replace(/shadow-blue-500\/40/g, 'shadow-blue-700/30');
  content = content.replace(/shadow-blue-600\/40/g, 'shadow-blue-800/30');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Button hover replacement complete.');
