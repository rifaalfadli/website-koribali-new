const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  './src/pages/Team.jsx',
  './src/pages/InsightDetail.jsx',
  './src/pages/Insight.jsx',
  './src/pages/ProjectDetail.jsx'
];

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace various badge styles
  content = content.replace(/text-sky-400 bg-sky-400\/10( px-3 py-1 rounded-full border border-sky-400\/20)?/g, 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 px-3 py-1 rounded-full');
  
  // Replace the slate-900 text-sky-400 ones
  content = content.replace(/bg-slate-900 text-sky-400( text-xs font-semibold px-3 py-1 rounded-full border border-slate-700)?/g, 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 px-3 py-1 text-xs font-semibold rounded-full');
  
  content = content.replace(/bg-slate-900 text-sky-400 px-3 py-1 rounded-full border border-slate-700/g, 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 px-3 py-1 rounded-full');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated badges in ${file}`);
  }
});
console.log('Badge replacement complete.');
