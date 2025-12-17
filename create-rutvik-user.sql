-- ============================================
-- SQL Script to create Rutvik admin user
-- ============================================
-- Run this in Supabase SQL Editor
-- Password: rutvik123 (bcrypt hashed)
-- ============================================

-- Step 1: Check if user already exists
SELECT * FROM users WHERE email = 'rutvik@gmail.com';

-- Step 2: Create or update Rutvik user
INSERT INTO users (id, email, password, name, role, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'rutvik@gmail.com',
  '$2a$10$tg/.HJ4zs60Bp1vi4Cxs7uBxZ50mIC3.0GOM.YQNw5U4/.VFFmi7e',
  'Rutvik',
  'admin',
  NOW(),
  NOW()
)
ON CONFLICT (email) 
DO UPDATE SET
  password = '$2a$10$tg/.HJ4zs60Bp1vi4Cxs7uBxZ50mIC3.0GOM.YQNw5U4/.VFFmi7e',
  name = 'Rutvik',
  role = 'admin',
  updated_at = NOW();

-- Step 3: Verify user was created successfully
SELECT id, email, name, role, created_at FROM users WHERE email = 'rutvik@gmail.com';

-- ============================================
-- Login Credentials:
-- Email: rutvik@gmail.com
-- Password: rutvik123
-- ============================================
