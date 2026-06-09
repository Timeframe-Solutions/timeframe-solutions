const fs = require('fs');
const path = require('path');

const mapping = {
  'AppButton': 'UiAppButton',
  'AppBadge': 'UiAppBadge',
  'AppCard': 'UiAppCard',
  'PageHero': 'UiPageHero',
  'SectionWrapper': 'UiSectionWrapper',
  'NavBar': 'GlobalNavBar',
  'Footer': 'GlobalFooter',
  'CtaBanner': 'GlobalCtaBanner',
  'HeroSection': 'HomeHeroSection',
  'ServicesStrip': 'HomeServicesStrip',
  'PortfolioPreview': 'HomePortfolioPreview',
  'WhyTimeframe': 'HomeWhyTimeframe',
  'PricingSnapshot': 'HomePricingSnapshot',
  'PortfolioGrid': 'WorkPortfolioGrid',
  'PortfolioCard': 'WorkPortfolioCard',
  'CaseStudyHero': 'WorkCaseStudyHero',
  'CaseStudyMeta': 'WorkCaseStudyMeta',
  'CaseStudyScreenshots': 'WorkCaseStudyScreenshots',
  'CaseStudyFeatures': 'WorkCaseStudyFeatures',
  'CaseStudyDemonstrates': 'WorkCaseStudyDemonstrates',
  'ServiceDetail': 'ServicesServiceDetail',
  'IncludesList': 'ServicesIncludesList',
  'UpsellList': 'ServicesUpsellList',
};

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

const appDir = 'frontend/app';

walk(appDir, (filePath) => {
  if (filePath.endsWith('.vue')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    for (const [oldName, newName] of Object.entries(mapping)) {
      // Replace opening tags: <OldName, <OldName/, <OldName>
      const openTagRegex = new RegExp(`(<)${oldName}(\\s|/|>)`, 'g');
      content = content.replace(openTagRegex, `$1${newName}$2`);
      
      // Replace closing tags: </OldName>
      const closeTagRegex = new RegExp(`(</)${oldName}(>)`, 'g');
      content = content.replace(closeTagRegex, `$1${newName}$2`);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
