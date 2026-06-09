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

  // Backgrounds
  content = content.replace(/bg-slate-900/g, 'bg-slate-100 dark:bg-slate-900');
  // Avoid replacing if it's already "dark:bg-slate-900"
  content = content.replace(/(?<!dark:)bg-slate-900/g, 'bg-white dark:bg-slate-900');
  content = content.replace(/(?<!dark:)bg-slate-900/g, 'bg-slate-50 dark:bg-slate-900');
  content = content.replace(/(?<!dark:)bg-slate-700/g, 'bg-slate-100 dark:bg-slate-700');

  // Borders
  content = content.replace(/(?<!dark:)border-slate-800/g, 'border-slate-300 dark:border-slate-800');
  content = content.replace(/(?<!dark:)border-slate-700/g, 'border-slate-200 dark:border-slate-700');

  // Texts
  content = content.replace(/(?<!dark:)text-slate-400/g, 'text-slate-500 dark:text-slate-400');
  content = content.replace(/(?<!dark:)text-slate-300/g, 'text-slate-600 dark:text-slate-300');

  // Specific fix for text-white. We only want to convert text-white on generic things, not buttons or specific areas.
  // Using a simplistic replace for text-white might break buttons.
  // We'll replace text-white with "text-slate-900 dark:text-white"
  // BUT we will revert it for Button.jsx
  content = content.replace(/(?<!dark:)text-white/g, 'text-slate-900 dark:text-white');

  // Special Button.jsx reversals
  if (file.endsWith('Button.jsx')) {
    content = content.replace(/text-slate-900 dark:text-white/g, 'text-white');
  }

  // Navbar reversals for icons etc.
  if (file.endsWith('Navbar.jsx')) {
    // If there are buttons that use text-white, let's just leave it generic. The script will add dark:, we can manually review later.
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Light Mode migration complete.');
