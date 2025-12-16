# 🔍 Check Your Database

## Quick Database Check

### Step 1: Open Supabase SQL Editor

Go to: https://supabase.com/dashboard/project/fbvmfrmdbnsrabpoweqq/sql/new

### Step 2: Check if Admin User Exists

Paste this query and click **Run**:

```sql
SELECT * FROM users WHERE username = 'admin';
```

**Expected Result:** One row showing admin user

**If empty:** Admin user doesn't exist! Continue to Step 3.

---

### Step 3: Create Admin User (If Missing)

If Step 2 returned no results, run this:

```sql
-- Create admin user with password: magic2024
INSERT INTO users (id, email, password, name, role, username, "isActive", "createdAt", "updatedAt")
VALUES (
  gen_random_uuid(),
  'admin@magic.com',
  '$2a$10$YourHashedPasswordHere',
  'Admin User',
  'admin',
  'admin',
  true,
  NOW(),
  NOW()
);
```

**Wait!** The password hash above is wrong. Let me give you the correct one...

---

## 🔐 Correct Way to Create Admin User

### Option 1: Use Your Local Script (Recommended)

In your terminal (in backend folder):

```batch
node prisma/seed.js
```

This will create the admin user with correct password hash.

---

### Option 2: Manual SQL (If seed doesn't work)

1. First, generate the password hash locally:

```batch
cd backend
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('magic2024', 10));"
```

2. Copy the output (looks like: `$2a$10$abc123...`)

3. Go to Supabase SQL Editor and run:

```sql
INSERT INTO users (id, email, password, name, role, username, "isActive", "createdAt", "updatedAt")
VALUES (
  gen_random_uuid(),
  'admin@magic.com',
  'PASTE_YOUR_HASH_HERE',
  'Admin User',
  'admin',
  'admin',
  true,
  NOW(),
  NOW()
);
```

---

## ✅ Verify Admin User

After creating, verify it exists:

```sql
SELECT username, email, role, "isActive" FROM users WHERE username = 'admin';
```

**Should show:**
```
username | email           | role  | isActive
---------|-----------------|-------|----------
admin    | admin@magic.com | admin | true
```

---

## 🎯 Quick Summary

**Your Credentials:**
- Username: `admin`
- Password: `magic2024`

**NOT:**
- ❌ Username: admin, Password: rutvik
- ❌ Username: rutvik, Password: anything

**Use:** admin / magic2024

---

## 🔧 If Login Still Fails

1. **Check Vercel logs** for backend errors
2. **Verify environment variables** are set
3. **Check database** has admin user
4. **Use correct password:** magic2024

---

**Need help? Check `FIX_ALL_ERRORS.md` for complete troubleshooting!**
