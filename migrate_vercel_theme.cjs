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
      if (file.endsWith('.jsx')) {
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

  // Background replacements
  content = content.replace(/bg-slate-900/g, 'bg-dark-950');
  content = content.replace(/bg-black/g, 'bg-dark-950');
  content = content.replace(/bg-slate-900/g, 'bg-slate-900');
  content = content.replace(/bg-slate-900/g, 'bg-dark-800');

  // Border replacements
  content = content.replace(/border-slate-800/g, 'border-dark-700');
  content = content.replace(/border-slate-700/g, 'border-dark-600');
  content = content.replace(/border-slate-600/g, 'border-dark-500');

  // Text replacements
  content = content.replace(/text-slate-200/g, 'text-dark-100');
  content = content.replace(/text-slate-300/g, 'text-dark-100');
  content = content.replace(/text-slate-400/g, 'text-dark-300');
  content = content.replace(/text-slate-500/g, 'text-dark-400');

  // Placeholder replacements
  content = content.replace(/placeholder:text-slate-\d00/g, 'placeholder:text-dark-400');

  // Red/Rose replacements to Azure Blue (Brand)
  content = content.replace(/bg-red-950\/30/g, 'bg-brand-muted');
  content = content.replace(/bg-red-950\/50/g, 'bg-brand-muted/50');
  content = content.replace(/bg-red-950/g, 'bg-brand-muted');
  content = content.replace(/bg-red-900\/20/g, 'bg-brand-muted');
  content = content.replace(/bg-red-900/g, 'bg-brand-muted');
  content = content.replace(/bg-red-600/g, 'bg-brand');
  content = content.replace(/bg-red-500/g, 'bg-brand');

  content = content.replace(/hover:bg-red-700/g, 'hover:bg-brand-hover');
  content = content.replace(/hover:bg-red-600/g, 'hover:bg-brand-hover');
  content = content.replace(/hover:bg-red-800/g, 'hover:bg-brand-hover');

  content = content.replace(/text-red-500/g, 'text-brand-accent');
  content = content.replace(/text-red-600/g, 'text-brand-accent');
  content = content.replace(/text-red-400/g, 'text-brand-accent');

  content = content.replace(/hover:text-red-400/g, 'hover:text-brand-accent');
  content = content.replace(/hover:text-red-500/g, 'hover:text-brand-accent');

  content = content.replace(/border-red-500/g, 'border-brand-border');
  content = content.replace(/border-red-600/g, 'border-brand-border');
  content = content.replace(/border-red-900\/50/g, 'border-brand-border/50');
  content = content.replace(/border-red-900\/30/g, 'border-brand-border/30');
  content = content.replace(/border-red-900/g, 'border-brand-border');

  content = content.replace(/hover:border-red-500/g, 'hover:border-brand-border');
  content = content.replace(/hover:border-red-600/g, 'hover:border-brand-border');

  // Gradients red to brand
  content = content.replace(/from-red-\d00/g, 'from-brand');
  content = content.replace(/to-red-\d00/g, 'to-brand-hover');
  content = content.replace(/via-red-\d00/g, 'via-brand');
  content = content.replace(/hover:from-red-\d00/g, 'hover:from-brand-hover');
  content = content.replace(/hover:to-red-\d00/g, 'hover:to-brand');

  // Shadows and Rings
  content = content.replace(/shadow-red-900\/[0-9]+/g, 'shadow-brand/20');
  content = content.replace(/shadow-\[0_0_15px_rgba\(239,68,68,0\.4\)\]/g, 'shadow-[0_0_15px_rgba(0,120,212,0.4)]');
  content = content.replace(/shadow-\[0_0_12px_rgba\(239,68,68,0\.5\)\]/g, 'shadow-[0_0_12px_rgba(0,120,212,0.5)]');
  content = content.replace(/shadow-\[0_4px_12px_rgba\(220,38,38,0\.5\)\]/g, 'shadow-[0_4px_12px_rgba(0,120,212,0.5)]');
  content = content.replace(/ring-red-500/g, 'ring-brand/40');
  content = content.replace(/ring-red-600/g, 'ring-brand/40');
  content = content.replace(/focus:ring-red-600/g, 'focus:ring-brand/40');

  // Specific replacements requested by the user
  if (file.endsWith('Navbar.jsx')) {
    content = content.replace(/bg-slate-900/g, 'bg-slate-900/80 backdrop-blur-md');
    // Ensure we don't duplicate
    content = content.replace(/bg-slate-900\/80 backdrop-blur-md\/80/g, 'bg-slate-900/80 backdrop-blur-md');
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Vercel theme migration complete.');
