/**
 * Script to create Rutvik admin user in production database
 * Run this AFTER importing environment variables to Vercel
 * 
 * Usage: node create-rutvik-user.js
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Load environment from .env.production manually
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env.production');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  });
}

const prisma = new PrismaClient();

async function createRutvikUser() {
  console.log('🔐 Creating Rutvik admin user...\n');

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash('rutvik123', 10);
    
    // Create or update the user
    const user = await prisma.user.upsert({
      where: { email: 'rutvik@gmail.com' },
      update: {
        password: hashedPassword,
        name: 'Rutvik',
        role: 'admin',
      },
      create: {
        email: 'rutvik@gmail.com',
        password: hashedPassword,
        name: 'Rutvik',
        role: 'admin',
      },
    });

    console.log('✅ User created/updated successfully!\n');
    console.log('📋 User Details:');
    console.log('   ID:', user.id);
    console.log('   Email:', user.email);
    console.log('   Name:', user.name);
    console.log('   Role:', user.role);
    console.log('   Created:', user.createdAt);
    console.log('\n🔑 Login Credentials:');
    console.log('   Email: rutvik@gmail.com');
    console.log('   Password: rutvik123');
    console.log('\n✅ You can now login to your app!');

  } catch (error) {
    console.error('❌ Error creating user:', error.message);
    
    if (error.message.includes('Tenant or user not found')) {
      console.error('\n⚠️  DATABASE_URL is not set or incorrect!');
      console.error('Make sure you have .env.production file with correct DATABASE_URL');
    } else if (error.message.includes('Environment variable not found')) {
      console.error('\n⚠️  DATABASE_URL environment variable not found!');
      console.error('Make sure .env.production file exists');
    }
    
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createRutvikUser();
