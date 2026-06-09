const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.jsx') || file.endsWith('.css')) results.push(file);
  });
  return results;
}

walk('./src').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let orig = content;

  // 1. Literal replace of red to blue (keeps same exact shade)
  content = content.replace(/\bred-(\d{2,3})\b/g, 'blue-$1');
  content = content.replace(/\brose-(\d{2,3})\b/g, 'blue-$1');
  
  // Convert rgba
  content = content.replace(/rgba\(239,68,68,/g, 'rgba(59,130,246,');

  // 2. Fix the "light" hover effects on all buttons 
  // Replace the gradients that brighten up with a simple solid button
  content = content.replace(/bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-900/g, 'bg-blue-600 hover:bg-blue-700');
  
  // Specific Button.jsx fixes
  if (file.endsWith('Button.jsx')) {
    content = content.replace(/bg-gradient-to-r from-blue-800 to-blue-950 text-white hover:from-blue-700 hover:to-blue-900/g, 'bg-blue-600 text-white hover:bg-blue-700');
    // For other variants like ghost or outline, they might have hover:bg-blue-800/80 which is fine (it's dark)
  }
  
  // Contact CTA button specific fix (it has inline gradient)
  if (file.endsWith('Contact.jsx')) {
     content = content.replace(/bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-900/g, 'bg-blue-600 hover:bg-blue-700');
  }

  // Projects.jsx pagination active state (was bg-red-600)
  if (file.endsWith('Projects.jsx')) {
     content = content.replace(/'bg-blue-600 border-blue-500 text-white/g, "'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700");
  }

  // Insight.jsx pagination active state
  if (file.endsWith('Insight.jsx')) {
     content = content.replace(/'bg-blue-600 border-blue-500 text-white/g, "'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700");
     content = content.replace(/'bg-blue-600 text-white/g, "'bg-blue-600 text-white hover:bg-blue-700");
  }

  if (orig !== content) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
