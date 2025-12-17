import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set in environment variables!');
  console.error('Please add DATABASE_URL to your Vercel environment variables.');
}

// Prevent database access during build phase
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';

if (isBuildTime) {
  console.log('⚠️  Build phase detected - Prisma client will be initialized at runtime');
}

const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Graceful connection handling for serverless
if (process.env.NODE_ENV === 'production') {
  prisma.$connect().catch((err) => {
    console.error('Prisma connection error:', err.message);
  });
}

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
