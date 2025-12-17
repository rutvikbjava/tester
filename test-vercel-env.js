/**
 * Test script to verify environment variables are set correctly
 * Run this locally to ensure all required variables are present
 * 
 * Usage: node test-vercel-env.js
 * Note: This will load from .env.production file
 */

// Load environment variables from .env.production
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: join(__dirname, '.env.production') });

console.log('🔍 Checking Environment Variables...\n');

const requiredVars = [
  'DATABASE_URL',
  'DIRECT_URL',
  'JWT_SECRET',
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

let allPresent = true;

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 30)}...`);
  } else {
    console.log(`❌ ${varName}: NOT SET`);
    allPresent = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPresent) {
  console.log('✅ All required environment variables are set!');
  console.log('You can now deploy to Vercel.');
} else {
  console.log('❌ Some environment variables are missing!');
  console.log('Please add them to Vercel before deploying.');
}

console.log('='.repeat(50) + '\n');

// Test database connection
console.log('🔍 Testing Database Connection...\n');

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Try to count users
    const userCount = await prisma.user.count();
    console.log(`✅ Found ${userCount} users in database`);
    
    // Check if admin user exists
    const adminUser = await prisma.user.findFirst({
      where: { role: 'admin' }
    });
    
    if (adminUser) {
      console.log(`✅ Admin user found: ${adminUser.email}`);
    } else {
      console.log('⚠️  No admin user found. You may need to run seed-local.js');
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('\nPossible issues:');
    console.error('1. DATABASE_URL is incorrect');
    console.error('2. Database is not accessible');
    console.error('3. Prisma schema needs to be generated (run: npx prisma generate)');
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
