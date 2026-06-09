const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  './src/pages/Contact.jsx',
  './src/pages/dashboard/Login.jsx'
];

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Contact.jsx has focus:border-blue-500 and focus:ring-blue-500 (now sky-500 after the first script)
  // But we want to ensure it has the exact requested styles.
  // The first script changed blue-500 to sky-500, so it's already focus:ring-sky-500 focus:border-sky-500
  // However, I will explicitly make sure.
  
  content = content.replace(/focus:border-sky-\d00/g, 'focus:border-sky-500');
  content = content.replace(/focus:ring-sky-\d00/g, 'focus:ring-sky-500');

  // Let's also ensure badges have bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200.
  // Wait, badges are in Projects.jsx, Insight.jsx etc. I will handle badges next.

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated Inputs in ${file}`);
  }
});
console.log('Input replacement complete.');
