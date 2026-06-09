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

  // Change from blue-600/800 to blue-500/600 for the bright vibrant look
  content = content.replace(/from-blue-600 to-blue-800/g, 'from-blue-500 to-blue-600');
  content = content.replace(/hover:from-blue-500 hover:to-blue-700/g, 'hover:from-blue-400 hover:to-blue-500');
  
  // Adjust the shadow colors to be slightly brighter blue
  content = content.replace(/shadow-blue-700\/30/g, 'shadow-blue-500/30');
  content = content.replace(/shadow-blue-700\/40/g, 'shadow-blue-500/40');
  content = content.replace(/shadow-blue-800\/40/g, 'shadow-blue-600/40');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Button replacement 2 complete.');
