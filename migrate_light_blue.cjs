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
files.push('./index.html'); // Include root index.html

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Colors: red, rose -> blue
  // We want to replace red-XX and rose-XX with blue-XX
  content = content.replace(/\bred-(\d{2,3})\b/g, 'blue-$1');
  content = content.replace(/\brose-(\d{2,3})\b/g, 'blue-$1');

  // Backgrounds
  content = content.replace(/\bbg-slate-900\b/g, 'bg-slate-50');
  content = content.replace(/\bbg-slate-900\b/g, 'bg-white');
  content = content.replace(/\bbg-slate-900\b/g, 'bg-slate-100');
  content = content.replace(/\bbg-slate-700\b/g, 'bg-slate-200');
  content = content.replace(/\bbg-slate-600\b/g, 'bg-slate-300');

  // Background opacity variants
  content = content.replace(/\bbg-slate-900\/(\d+)\b/g, 'bg-slate-50/$1');
  content = content.replace(/\bbg-slate-900\/(\d+)\b/g, 'bg-white/$1');
  content = content.replace(/\bbg-slate-900\/(\d+)\b/g, 'bg-slate-100/$1');

  // Borders
  content = content.replace(/\bborder-slate-800\b/g, 'border-slate-200');
  content = content.replace(/\bborder-slate-700\b/g, 'border-slate-300');
  content = content.replace(/\bborder-slate-600\b/g, 'border-slate-400');
  content = content.replace(/\bborder-slate-800\/(\d+)\b/g, 'border-slate-200/$1');

  // Shadows
  content = content.replace(/\bshadow-slate-900\/(\d+)\b/g, 'shadow-slate-200/$1');
  content = content.replace(/\bshadow-slate-950\/(\d+)\b/g, 'shadow-slate-200/$1');

  // Text colors
  content = content.replace(/\btext-slate-400\b/g, 'text-slate-500');
  content = content.replace(/\btext-slate-300\b/g, 'text-slate-600');
  content = content.replace(/\btext-slate-200\b/g, 'text-slate-700');
  content = content.replace(/\btext-slate-100\b/g, 'text-slate-800');

  // Specific fix for text-white. We replace it generally but we will revert specific instances.
  content = content.replace(/\btext-white\b/g, 'text-slate-900');

  // === SPECIAL REVERSALS ===

  // 1. Buttons with bg-blue-X usually need text-white
  // So if there's "bg-blue-something" and "text-slate-900" close by, or if it's Button.jsx
  if (file.endsWith('Button.jsx')) {
    // revert "text-slate-900" back to "text-white" in Button variants that have gradients or solid backgrounds
    content = content.replace(/from-blue-800 to-blue-950 text-slate-900/g, 'from-blue-600 to-blue-800 text-white');
  }

  // Projects.jsx has pagination active state
  if (file.endsWith('Projects.jsx')) {
    // revert text-slate-900 to text-white for the active page button
    content = content.replace(/\? 'bg-blue-600 border-blue-500 text-slate-900/g, '? \'bg-blue-600 border-blue-500 text-white');
    content = content.replace(/\? 'bg-blue-600 text-slate-900/g, '? \'bg-blue-600 text-white');
    content = content.replace(/hover:text-slate-900/g, 'hover:text-blue-600'); // active pagination hover
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Light Blue Mode migration complete.');
