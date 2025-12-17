# 🔧 VERCEL 500 ERROR - COMPLETE FIX GUIDE

## 🔴 PROBLEM DIAGNOSIS

**Error:** API returns 500 status on `/api/auth/login`  
**Root Cause:** Missing environment variables in Vercel deployment

### What's Happening:
- ✅ Frontend works correctly
- ✅ API routes exist and are accessible
- ❌ Backend crashes because `DATABASE_URL` and `JWT_SECRET` are not set in Vercel
- ❌ Prisma cannot connect to database → 500 error

---

## ✅ SOLUTION: SET ENVIRONMENT VARIABLES IN VERCEL

### Step 1: Go to Vercel Dashboard
1. Open https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**

### Step 2: Add These Variables (CRITICAL)

Copy and paste these **EXACT** values into Vercel:

#### 🔐 Database Configuration
```
Name: DATABASE_URL
Value: postgresql://postgres.cvaaeqrbblwwmcchdadl:ShivamRP55623ll7321@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true
Environment: ✅ Production, ✅ Preview, ✅ Development
```

```
Name: DIRECT_URL
Value: postgresql://postgres.cvaaeqrbblwwmcchdadl:ShivamRP55623ll7321@aws-0-ap-south-1.pooler.supabase.com:5432/postgres
Environment: ✅ Production, ✅ Preview, ✅ Development
```

#### 🔑 JWT Configuration
```
Name: JWT_SECRET
Value: magic_incubation_super_secure_jwt_secret_2024_production
Environment: ✅ Production, ✅ Preview, ✅ Development
```

```
Name: JWT_EXPIRE
Value: 30d
Environment: ✅ Production, ✅ Preview, ✅ Development
```

#### 🌍 Environment Settings
```
Name: NODE_ENV
Value: production
Environment: ✅ Production
```

#### 🔵 Supabase Configuration
```
Name: SUPABASE_URL
Value: https://cvaaeqrbblwwmcchdadl.supabase.co
Environment: ✅ Production, ✅ Preview, ✅ Development
```

```
Name: SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YWFlcXJiYmx3d21jY2hkYWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NTcwMzIsImV4cCI6MjA4MTUzMzAzMn0.kBEZcsQG3_R8S4D4QvNiAfhdqgqDwrHGWLSna_bVl1E
Environment: ✅ Production, ✅ Preview, ✅ Development
```

#### 🎨 Frontend Variables (Next.js Public)
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://cvaaeqrbblwwmcchdadl.supabase.co
Environment: ✅ Production, ✅ Preview, ✅ Development
```

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YWFlcXJiYmx3d21jY2hkYWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NTcwMzIsImV4cCI6MjA4MTUzMzAzMn0.kBEZcsQG3_R8S4D4QvNiAfhdqgqDwrHGWLSna_bVl1E
Environment: ✅ Production, ✅ Preview, ✅ Development
```

---

## 🚀 Step 3: REDEPLOY (MANDATORY)

After adding all environment variables:

1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Select **Redeploy**
4. ✅ Check **"Use existing Build Cache"** (faster)
5. Click **Redeploy**

⚠️ **IMPORTANT:** Vercel does NOT automatically reload environment variables. You MUST redeploy!

---

## 🧪 Step 4: TEST THE API

After redeployment completes:

### Test 1: Health Check
Open in browser:
```
https://your-domain.vercel.app/api/health
```
Expected: `{ "status": "ok" }`

### Test 2: Login API
Use browser console or Postman:
```javascript
fetch('https://your-domain.vercel.app/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'rutvik@gmail.com',
    password: 'your_password'
  })
})
.then(r => r.json())
.then(console.log)
```

Expected Response:
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": "...",
    "username": "rutvik@gmail.com",
    "role": "admin",
    "email": "rutvik@gmail.com",
    "name": "Rutvik"
  },
  "expiresIn": 2592000000
}
```

---

## 🔍 Step 5: CHECK VERCEL LOGS (If Still Failing)

1. Go to Vercel Dashboard → **Deployments**
2. Click on the latest deployment
3. Click **Functions** tab
4. Click on `/api/auth/login`
5. View real-time logs

Common errors you might see:
- `PrismaClientInitializationError` → DATABASE_URL wrong or missing
- `JsonWebTokenError` → JWT_SECRET missing
- `Invalid credentials` → User doesn't exist in database

---

## 🗄️ Step 6: VERIFY DATABASE HAS USER

Your login expects a user with:
- Email: `rutvik@gmail.com`
- Password: **bcrypt hashed**

### Check Supabase:
1. Go to https://supabase.com/dashboard
2. Select your project: `cvaaeqrbblwwmcchdadl`
3. Go to **Table Editor** → `users` table
4. Verify user exists with correct email

### If User Missing, Create One:
Run this locally (with `.env.production` loaded):
```bash
node seed-local.js
```

Or manually in Supabase SQL Editor:
```sql
INSERT INTO users (id, email, password, name, role, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'rutvik@gmail.com',
  '$2a$10$YourBcryptHashedPasswordHere',
  'Rutvik',
  'admin',
  NOW(),
  NOW()
);
```

---

## 📊 VERIFICATION CHECKLIST

- [ ] All 9 environment variables added to Vercel
- [ ] Environment set to: Production + Preview + Development
- [ ] Redeployed after adding variables
- [ ] Health API returns 200
- [ ] Login API returns 200 (not 500)
- [ ] User exists in Supabase database
- [ ] Password is bcrypt hashed in database

---

## 🎯 WHY THIS FIXES THE 500 ERROR

| Issue | Before | After |
|-------|--------|-------|
| DATABASE_URL | ❌ undefined | ✅ Set in Vercel |
| Prisma Connection | ❌ Crashes | ✅ Connects to Supabase |
| JWT_SECRET | ❌ undefined | ✅ Set in Vercel |
| Token Generation | ❌ Fails | ✅ Works |
| API Response | ❌ 500 error | ✅ 200 success |

---

## 🔐 SECURITY NOTES

✅ **Safe to expose (frontend):**
- `NEXT_PUBLIC_*` variables
- `SUPABASE_ANON_KEY`
- `SUPABASE_URL`

❌ **NEVER expose (backend only):**
- `DATABASE_URL`
- `DIRECT_URL`
- `JWT_SECRET`

Vercel automatically keeps non-public variables secure.

---

## 🏁 EXPECTED RESULT

After following all steps:
```
✅ Build succeeds
✅ API responds with 200
✅ Login works correctly
✅ JWT tokens generated
✅ Frontend can authenticate
```

---

## 📞 NEXT STEPS IF STILL FAILING

If you still see 500 errors after this:

1. **Check Vercel Function Logs** (most important!)
2. Share the exact error message from logs
3. Verify Supabase connection string is correct
4. Test database connection directly

---

**Date:** December 17, 2025  
**Status:** 🔧 Ready to Fix  
**Estimated Time:** 5-10 minutes
