const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src/pages'),
  path.join(__dirname, 'src/components/home')
];

function processFile(filePath) {
  if (filePath.endsWith('CTASection.jsx') || filePath.endsWith('Layout.jsx') || filePath.endsWith('App.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove import statement
  content = content.replace(/import\s+CTASection\s+from\s+['"].*?CTASection['"];?\n?/g, '');
  
  // Remove component usage
  content = content.replace(/<CTASection\s*\/>\n?/g, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

directories.forEach(processDirectory);
console.log('Done removing CTASection from pages.');
