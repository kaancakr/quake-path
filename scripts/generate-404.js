// Script to generate 404.html for GitHub Pages
// This handles client-side routing for Next.js static exports on GitHub Pages

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const indexPath = path.join(outDir, 'index.html');
const notFoundPath = path.join(outDir, '404.html');

// Read index.html
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // For GitHub Pages, we need to ensure the base path is correct
  // The 404.html will be served when a route doesn't exist
  // This allows Next.js client-side routing to handle the navigation
  
  // Create 404.html with the same content as index.html
  // GitHub Pages will serve this for any 404, allowing Next.js router to handle it
  fs.writeFileSync(notFoundPath, indexContent);
  console.log('✓ Generated 404.html for GitHub Pages routing');
} else {
  console.error('✗ index.html not found in out directory. Run build first.');
  process.exit(1);
}

