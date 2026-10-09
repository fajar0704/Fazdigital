const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Rename existing custom text colors
    content = content.replace(/text-text-main-dark/g, 'text-brand-foreground');
    content = content.replace(/text-text-secondary-dark/g, 'text-brand-muted');
    content = content.replace(/placeholder-text-secondary-dark/g, 'placeholder-brand-muted');

    // 2. Replace text-white with text-brand-foreground
    content = content.replace(/text-white/g, 'text-brand-foreground');

    // 3. For components that actually need white text (like Button, badges, icons on dark BG), we use text-[#ffffff] or a new utility class 'text-static-white'
    // Let's replace some known text-brand-foreground back to text-white where appropriate:
    // e.g. Button.tsx, ServiceHero.tsx, etc if we know they have a colored background.
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
