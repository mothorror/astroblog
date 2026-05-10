const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'astro.config.mjs',
  'src/pages/index.astro',
  'src/layouts/NextLayout.astro',
  'src/components/NextHeader.astro',
  'src/components/NextFooter.astro',
  'remark-custom-blockquotes.js'
];

filesToProcess.forEach(file => {
  const filePath = path.join(process.argv[2] || '.', file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 移除单行注释
  content = content.replace(/\/\/.*$/gm, '');

  // 移除多行注释
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  // 移除 JSDoc 注释
  content = content.replace(/\/\*\*[\s\S]*?\*\/[ \t]*$/gm, '');

  // 清理多余的空行（超过2个连续空行）
  content = content.replace(/\n{3,}/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`已处理: ${file}`);
});

console.log('注释移除完成！');
