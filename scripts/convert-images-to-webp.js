const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.png', '.jpg', '.jpeg'];
const excludeDirs = ['node_modules', '.next', 'out'];

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return imageExtensions.includes(ext);
}

function shouldExcludeDir(dirName) {
  return excludeDirs.includes(dirName);
}

async function convertToWebP(inputPath, outputPath) {
  try {
    const stats = await fs.promises.stat(inputPath);
    if (!stats.isFile()) return;

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const webpPath = outputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    if (fs.existsSync(webpPath)) {
      const inputStats = await fs.promises.stat(inputPath);
      const webpStats = await fs.promises.stat(webpPath);
      
      if (webpStats.mtime >= inputStats.mtime) {
        console.log(`Skipping ${path.relative(publicDir, inputPath)} (WebP already exists and is up to date)`);
        return;
      }
    }

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    
    console.log(`✓ Converted ${path.relative(publicDir, inputPath)} → ${path.relative(publicDir, webpPath)}`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!shouldExcludeDir(entry.name)) {
        await processDirectory(fullPath);
      }
    } else if (entry.isFile() && shouldProcessFile(fullPath)) {
      await convertToWebP(fullPath, fullPath);
    }
  }
}

async function main() {
  console.log('🖼️  Converting images to WebP format...\n');
  
  if (!fs.existsSync(publicDir)) {
    console.error(`Error: Public directory not found at ${publicDir}`);
    process.exit(1);
  }

  await processDirectory(publicDir);
  console.log('\n✅ Image conversion completed!');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

