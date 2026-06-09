const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/home/TechStack.jsx',
  'src/components/home/WhyChooseUs.jsx',
  'src/components/ui/Footer.jsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Backgrounds
  content = content.replace(/(?<!dark:)bg-slate-900/g, 'bg-slate-100 dark:bg-slate-900');
  content = content.replace(/(?<!dark:)bg-slate-900/g, 'bg-white dark:bg-slate-900');
  content = content.replace(/(?<!dark:)bg-slate-900/g, 'bg-slate-50 dark:bg-slate-900');
  content = content.replace(/(?<!dark:)bg-slate-700/g, 'bg-slate-100 dark:bg-slate-700');

  // Borders
  content = content.replace(/(?<!dark:)border-slate-800/g, 'border-slate-300 dark:border-slate-800');
  content = content.replace(/(?<!dark:)border-slate-700/g, 'border-slate-200 dark:border-slate-700');

  // Texts
  content = content.replace(/(?<!dark:)text-slate-400/g, 'text-slate-500 dark:text-slate-400');
  content = content.replace(/(?<!dark:)text-slate-300/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/(?<!dark:)text-white/g, 'text-slate-900 dark:text-white');

  fs.writeFileSync(filePath, content);
  console.log(`Re-applied light mode classes to ${file}`);
});
