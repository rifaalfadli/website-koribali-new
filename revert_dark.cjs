const fs = require('fs');
const path = require('path');

const filesToRevert = [
  'src/components/home/HeroSection.jsx',
  'src/components/ui/Navbar.jsx',
  'src/components/home/TrustBar.jsx',
  'src/components/home/TechStack.jsx',
  'src/components/ui/FloatingContact.jsx',
  'src/components/home/WhyChooseUs.jsx',
  'src/components/home/CTASection.jsx',
  'src/components/ui/Footer.jsx'
];

filesToRevert.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Revert Backgrounds
  content = content.replace(/bg-slate-100 dark:bg-slate-900/g, 'bg-slate-900');
  content = content.replace(/bg-white dark:bg-slate-900/g, 'bg-slate-900');
  content = content.replace(/bg-slate-50 dark:bg-slate-900/g, 'bg-slate-900');
  content = content.replace(/bg-slate-100 dark:bg-slate-700/g, 'bg-slate-700');

  // Revert Borders
  content = content.replace(/border-slate-300 dark:border-slate-800/g, 'border-slate-800');
  content = content.replace(/border-slate-200 dark:border-slate-700/g, 'border-slate-700');

  // Revert Texts
  content = content.replace(/text-slate-500 dark:text-slate-400/g, 'text-slate-400');
  content = content.replace(/text-slate-600 dark:text-slate-300/g, 'text-slate-300');
  content = content.replace(/text-slate-900 dark:text-white/g, 'text-white');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Reverted dark mode classes in ${file}`);
  }
});
console.log('Revert complete.');
