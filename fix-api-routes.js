/**
 * Script to add dynamic rendering configuration to all API routes
 * This prevents build-time database access issues on Vercel
 */

const fs = require('fs');
const path = require('path');

const apiRoutes = [
  'app/api/auth/login/route.js',
  'app/api/auth/me/route.js',
  'app/api/auth/refresh/route.js',
  'app/api/auth/change-password/route.js',
  'app/api/auth/update-admin-credentials/route.js',
  'app/api/auth/verify-admin/route.js',
  'app/api/startups/route.js',
  'app/api/startups/[id]/route.js',
  'app/api/startups/stats/overview/route.js',
  'app/api/smc/route.js',
  'app/api/smc/[id]/route.js',
  'app/api/settings/route.js',
  'app/api/settings/[key]/route.js',
  'app/api/one-on-one/route.js',
  'app/api/one-on-one/[id]/route.js',
  'app/api/health/route.js',
  'app/api/achievements/[startupId]/route.js',
  'app/api/achievements/[startupId]/[achievementId]/route.js'
];

const dynamicConfig = `// Force dynamic rendering - prevent build-time database access
export const dynamic = 'force-dynamic';
export const revalidate = 0;

`;

apiRoutes.forEach(routePath => {
  const fullPath = path.join(__dirname, routePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${routePath} - file not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if already has dynamic config
  if (content.includes('export const dynamic')) {
    console.log(`✅ ${routePath} - already configured`);
    return;
  }

  // Find the first import statement
  const lines = content.split('\n');
  let insertIndex = 0;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import')) {
      insertIndex = i;
      // Find the end of imports
      while (i < lines.length && (lines[i].trim().startsWith('import') || lines[i].trim() === '')) {
        i++;
      }
      insertIndex = i;
      break;
    }
  }

  // Insert dynamic config after imports
  lines.splice(insertIndex, 0, dynamicConfig);
  content = lines.join('\n');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ ${routePath} - added dynamic config`);
});

console.log('\n✅ All API routes updated successfully!');
