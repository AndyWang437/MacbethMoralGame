const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Starting build process...');
  const vitePath = path.join(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');
  execSync(`node ${vitePath} build`, { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 