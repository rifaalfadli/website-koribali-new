const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html')) results.push(file);
  });
  return results;
}

const map = {
  // Backgrounds
  'bg-slate-900': 'bg-slate-50 dark:bg-slate-900',
  'bg-slate-800': 'bg-white dark:bg-slate-800',
  'bg-slate-700': 'bg-slate-100 dark:bg-slate-700',
  
  // Background hover
  'hover:bg-slate-900': 'hover:bg-slate-100 dark:hover:bg-slate-900',
  'hover:bg-slate-800': 'hover:bg-slate-200 dark:hover:bg-slate-800',
  
  // Opacity Backgrounds
  'bg-slate-900/50': 'bg-slate-50/50 dark:bg-slate-900/50',
  'bg-slate-900/30': 'bg-slate-50/80 dark:bg-slate-900/30',
  'bg-slate-900/80': 'bg-white/80 dark:bg-slate-900/80',
  
  // Borders
  'border-slate-700': 'border-slate-200 dark:border-slate-700',
  'border-slate-600': 'border-slate-300 dark:border-slate-600',
  'border-slate-500': 'border-slate-400 dark:border-slate-500',
  
  // Texts
  'text-slate-300': 'text-slate-600 dark:text-slate-300',
  'text-slate-400': 'text-slate-500 dark:text-slate-400',
  'text-slate-500': 'text-slate-400 dark:text-slate-500',
  
  // Text White (We'll do a generic replace then fix specific components)
  'text-white': 'text-slate-900 dark:text-white',
};

walk('./src').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let orig = content;

  // Generic replacement based on map
  for (const [darkClass, lightDarkClass] of Object.entries(map)) {
    // Avoid double replacing if it somehow already has dark: (though grep confirmed none exist)
    const regex = new RegExp(`(?<!dark:)\\b${darkClass.replace(/\//g, '\\/')}\\b`, 'g');
    content = content.replace(regex, lightDarkClass);
  }

  // --- SPECIAL FIXES FOR TEXT-WHITE ---
  
  // Buttons should always have white text in both modes if they are solid blue
  if (file.endsWith('Button.jsx')) {
    content = content.replace(/text-slate-900 dark:text-white/g, 'text-white');
  }

  // Project active pagination
  if (file.endsWith('Projects.jsx')) {
    content = content.replace(/'bg-blue-600 border-blue-600 text-slate-900 dark:text-white hover:bg-blue-700 hover:border-blue-700'/g, "'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700'");
  }

  // Insight active pagination
  if (file.endsWith('Insight.jsx')) {
    content = content.replace(/'bg-blue-600 border-blue-600 text-slate-900 dark:text-white hover:bg-blue-700 hover:border-blue-700'/g, "'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700'");
    content = content.replace(/'bg-blue-600 text-slate-900 dark:text-white hover:bg-blue-700'/g, "'bg-blue-600 text-white hover:bg-blue-700'");
  }
  
  // CTA Section buttons (if they had text-white hardcoded)
  if (file.endsWith('CTASection.jsx') || file.endsWith('HeroSection.jsx') || file.endsWith('Contact.jsx')) {
    content = content.replace(/bg-blue-600 text-slate-900 dark:text-white/g, 'bg-blue-600 text-white');
    content = content.replace(/bg-blue-600 hover:bg-blue-700 text-slate-900 dark:text-white/g, 'bg-blue-600 hover:bg-blue-700 text-white');
  }

  if (orig !== content) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});

// Also update index.css specifically for grid background and html body
const indexCssPath = './src/index.css';
if (fs.existsSync(indexCssPath)) {
  let cssContent = fs.readFileSync(indexCssPath, 'utf8');
  
  // Change body @apply
  cssContent = cssContent.replace(/@apply bg-slate-900 text-slate-300 font-sans antialiased;/, '@apply bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-300 font-sans antialiased;');
  
  // Make grid dark in light mode, light in dark mode using class strategy or CSS vars
  // The easiest is to leave grid light, but if the background is light, it's invisible.
  // Tailwind v4 allows dark: selectors directly in custom css or we can just use CSS variables.
  if (!cssContent.includes('--grid-color:')) {
    cssContent = cssContent.replace(
      'background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),',
      `background-image: linear-gradient(to right, var(--grid-color, rgba(0, 0, 0, 0.05)) 1px, transparent 1px),`
    );
    cssContent = cssContent.replace(
      'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);',
      `linear-gradient(to bottom, var(--grid-color, rgba(0, 0, 0, 0.05)) 1px, transparent 1px);`
    );
    cssContent = cssContent.replace('@theme {', `@theme {\n}\n\n@layer base {\n  :root { --grid-color: rgba(0, 0, 0, 0.03); }\n  .dark { --grid-color: rgba(255, 255, 255, 0.03); }\n`);
  }

  fs.writeFileSync(indexCssPath, cssContent);
}

// Add Tailwind dark mode class strategy to index.html 
const htmlPath = './index.html';
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes('class="dark"')) {
    html = html.replace('<html lang="id">', '<html lang="id" class="dark">');
    fs.writeFileSync(htmlPath, html);
  }
}
