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

  // Make the primary gradient brighter blue
  content = content.replace(/from-blue-800 to-blue-950/g, 'from-blue-600 to-blue-800');
  content = content.replace(/hover:from-blue-700 hover:to-blue-900/g, 'hover:from-blue-500 hover:to-blue-700');
  
  // Also adjust the shadow colors to match the brighter buttons
  content = content.replace(/shadow-blue-900\/30/g, 'shadow-blue-700/30');
  content = content.replace(/shadow-blue-900\/40/g, 'shadow-blue-700/40');
  content = content.replace(/shadow-blue-950\/40/g, 'shadow-blue-800/40');

  // Also in CTASection.jsx, there's `to-blue-950`. Let's just fix it if it's there
  content = content.replace(/to-blue-950/g, 'to-blue-800');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Button replacement complete.');
