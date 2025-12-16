# 🔧 Fix Vercel Deployment - Quick Guide

## ❌ The Problem

Your app is deployed but trying to connect to `localhost:5000` instead of your Vercel API.

## ✅ The Solution (5 minutes)

### Step 1: Find Your Vercel URL

1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Copy your URL (looks like: `https://magic-incubation-xyz123.vercel.app`)

**Write it down here:** `_________________________________`

---

### Step 2: Add Environment Variables in Vercel

1. In your Vercel project, click **Settings**
2. Click **Environment Variables** (left sidebar)
3. Add these variables ONE BY ONE:

#### Variable 1: VITE_API_URL
```
Name: VITE_API_URL
Value: https://YOUR-VERCEL-URL.vercel.app/api
Environment: Production
```
**⚠️ Replace `YOUR-VERCEL-URL` with your actual URL!**

Click **Save**

#### Variable 2: VITE_SUPABASE_URL
```
Name: VITE_SUPABASE_URL
Value: https://fbvmfrmdbnsrabpoweqq.supabase.co
Environment: Production
```
Click **Save**

#### Variable 3: VITE_SUPABASE_ANON_KEY
```
Name: VITE_SUPABASE_ANON_KEY
Value: sb_publishable_gGLabXw8vudmFu5GvwjL4g_psCUSvTrs
Environment: Production
```
Click **Save**

#### Variable 4: DATABASE_URL
```
Name: DATABASE_URL
Value: postgresql://postgres.fbvmfrmdbnsrabpoweqq:SrVRfCPgU0iN2HOF@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
Environment: Production
```
Click **Save**

#### Variable 5: SUPABASE_URL
```
Name: SUPABASE_URL
Value: https://fbvmfrmdbnsrabpoweqq.supabase.co
Environment: Production
```
Click **Save**

#### Variable 6: SUPABASE_ANON_KEY
```
Name: SUPABASE_ANON_KEY
Value: sb_publishable_gGLabXw8vudmFu5GvwjL4g_psCUSvTrs
Environment: Production
```
Click **Save**

#### Variable 7: SUPABASE_SERVICE_KEY
```
Name: SUPABASE_SERVICE_KEY
Value: sb_secret_0feIQ0mepF4cdTij8Fu0pw_rtCdiunVt
Environment: Production
```
Click **Save**

#### Variable 8: JWT_SECRET
```
Name: JWT_SECRET
Value: magic-incubation-super-secret-key-2024-change-this-in-production
Environment: Production
```
Click **Save**

#### Variable 9: JWT_EXPIRE
```
Name: JWT_EXPIRE
Value: 30d
Environment: Production
```
Click **Save**

#### Variable 10: ADMIN_USERNAME
```
Name: ADMIN_USERNAME
Value: admin
Environment: Production
```
Click **Save**

#### Variable 11: ADMIN_PASSWORD
```
Name: ADMIN_PASSWORD
Value: magic2024
Environment: Production
```
Click **Save**

#### Variable 12: NODE_ENV
```
Name: NODE_ENV
Value: production
Environment: Production
```
Click **Save**

#### Variable 13: CORS_ORIGIN
```
Name: CORS_ORIGIN
Value: https://YOUR-VERCEL-URL.vercel.app
Environment: Production
```
**⚠️ Replace `YOUR-VERCEL-URL` with your actual URL!**

Click **Save**

---

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes

---

### Step 4: Test

1. Visit your Vercel URL
2. Try to login:
   - Username: `admin`
   - Password: `magic2024`

**It should work now!** ✅

---

## 🎯 Quick Checklist

```
[ ] Found my Vercel URL
[ ] Added VITE_API_URL (with MY Vercel URL)
[ ] Added VITE_SUPABASE_URL
[ ] Added VITE_SUPABASE_ANON_KEY
[ ] Added DATABASE_URL
[ ] Added SUPABASE_URL
[ ] Added SUPABASE_ANON_KEY
[ ] Added SUPABASE_SERVICE_KEY
[ ] Added JWT_SECRET
[ ] Added JWT_EXPIRE
[ ] Added ADMIN_USERNAME
[ ] Added ADMIN_PASSWORD
[ ] Added NODE_ENV
[ ] Added CORS_ORIGIN (with MY Vercel URL)
[ ] Redeployed
[ ] Tested login
```

---

## 🔧 Still Not Working?

### Check These:

1. **Did you replace `YOUR-VERCEL-URL`?**
   - VITE_API_URL should have YOUR actual URL
   - CORS_ORIGIN should have YOUR actual URL

2. **Did you redeploy after adding variables?**
   - Variables only take effect after redeployment

3. **Check Vercel logs:**
   - Go to Deployments → Click on latest
   - Click "View Function Logs"
   - Look for errors

---

## 💡 Pro Tip

**Copy your Vercel URL and paste it here for reference:**

```
My Vercel URL: https://_____________________.vercel.app

My VITE_API_URL: https://_____________________.vercel.app/api

My CORS_ORIGIN: https://_____________________.vercel.app
```

---

**After following these steps, your app should work perfectly! 🎉**
