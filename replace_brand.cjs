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

  // Replace sky- with brand-
  content = content.replace(/sky-(\d+)/g, 'brand-$1');

  // Specific component rules:
  
  // Button outline: border border-brand-600 text-brand-600 hover:bg-brand-50
  // Button primary: bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-medium
  // Since I am modifying everything, I can just do a targeted replace for Button.jsx inside the loop
  if (file.endsWith('Button.jsx')) {
    content = content.replace(/primary: ".*"/g, 'primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 font-medium shadow-lg shadow-brand-600/20"');
    content = content.replace(/outline: ".*"/g, 'outline: "border border-brand-600 text-brand-600 hover:bg-brand-50 active:scale-95"');
    content = content.replace(/ghost: ".*"/g, 'ghost: "text-brand-600 hover:bg-brand-50 active:scale-95"');
  }

  // Alerts: bg-brand-50 border border-brand-200 text-brand-800
  if (file.endsWith('ErrorState.jsx')) {
    content = content.replace(/bg-brand-50 dark:bg-brand-900\/50 dark:border-brand-700/g, 'bg-brand-50 border-brand-200 text-brand-800');
    // Wait, let's just make it generic. I'll replace the whole class string if possible, or just let it be handled naturally since I already made them sky-50, etc.
    // It's easier to just rely on the sky->brand mapping for alerts because I already set them to bg-sky-50 border-sky-200 text-sky-800.
    // However, the dark classes for Alert wasn't explicitly requested to be changed in the new rules (no dark mode rule for alerts mentioned, only subtle bg dark:bg-brand-900/30).
  }

  // Badges: bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-300
  // Earlier I set them to bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200
  content = content.replace(/bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200/g, 'bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-300');

  // Navbar Active nav: text-brand-600 border-b-2 border-brand-600
  // It's already mapped via sky->brand

  // Form Inputs: focus:ring-2 focus:ring-brand-600 focus:border-brand-600
  content = content.replace(/focus:ring-brand-500/g, 'focus:ring-2 focus:ring-brand-600 focus:border-brand-600');
  // Avoid duplicating focus:border
  content = content.replace(/focus:border-brand-500 focus:ring-2 focus:ring-brand-600 focus:border-brand-600/g, 'focus:ring-2 focus:ring-brand-600 focus:border-brand-600');

  // Checkbox: accent-brand-600
  // There's a checkbox in Login.jsx: "text-cyan-500 focus:ring-cyan-500"
  content = content.replace(/text-cyan-500 focus:ring-cyan-500/g, 'accent-brand-600 text-brand-600 focus:ring-brand-600');

  // Dark mode specific replaces
  // dark:bg-brand-900/30 (e.g. wherever dark:bg-brand-900/50 was used)
  content = content.replace(/dark:bg-brand-900\/50/g, 'dark:bg-brand-900/30');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Brand replacement complete.');
