const fs = require('fs');
const files = [
  'src/components/layout/MobileMenu.tsx',
  'src/components/pricing/PricingCategoryTabs.tsx',
  'src/components/portfolio/PortfolioGrid.tsx',
  'src/components/home/WhyChooseUs.tsx',
  'src/app/layout.tsx'
];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // revert all
  content = content.replace(/text-static-white/g, 'text-brand-foreground');
  
  // now manually apply correct static-white
  if (f.includes('layout.tsx')) {
    content = content.replace('selection:text-brand-foreground', 'selection:text-static-white');
  }
  if (f.includes('MobileMenu.tsx')) {
    content = content.replace('hover:bg-blue-600 text-brand-foreground px-6', 'hover:bg-blue-600 text-static-white px-6');
  }
  if (f.includes('PricingCategoryTabs.tsx') || f.includes('PortfolioGrid.tsx')) {
    content = content.replace('? "bg-brand-accent-blue text-brand-foreground', '? "bg-brand-accent-blue text-static-white');
  }
  if (f.includes('WhyChooseUs.tsx')) {
    content = content.replace('group-hover:text-brand-foreground transition-all', 'group-hover:text-static-white transition-all');
  }
  fs.writeFileSync(f, content);
});
