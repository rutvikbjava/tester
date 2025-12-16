# 🔐 VERCEL ENVIRONMENT VARIABLES - IMPORT GUIDE

## ✅ METHOD 1: Import .env File Using Vercel CLI (RECOMMENDED)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Link Your Project
```bash
vercel link
```
Follow the prompts to link to your Vercel project.

### Step 4: Create Production .env File
Create a file named `.env.production.local` in your root directory:

```env
# Backend Variables
DATABASE_URL=your_supabase_connection_string_with_pooling
JWT_SECRET=your_secure_jwt_secret_here
NODE_ENV=production
CORS_ORIGIN=https://your-vercel-domain.vercel.app
VERCEL=1
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Frontend Variables
VITE_API_URL=https://your-vercel-domain.vercel.app/api
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 5: Push Environment Variables to Vercel
```bash
vercel env pull .env.production.local
vercel env add
```

Or use this command to import from file:
```bash
# For production environment
cat .env.production.local | vercel env add production

# Or on Windows PowerShell
Get-Content .env.production.local | vercel env add production
```

---

## ✅ METHOD 2: Bulk Import via Vercel Dashboard

### Step 1: Prepare Your .env File
Create `.env.vercel` with all variables:

```env
DATABASE_URL="postgresql://user:pass@host:5432/db?pgbouncer=true"
JWT_SECRET="your_jwt_secret_here"
NODE_ENV="production"
CORS_ORIGIN="https://your-domain.vercel.app"
VERCEL="1"
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your_anon_key"
SUPABASE_SERVICE_KEY="your_service_key"
VITE_API_URL="https://your-domain.vercel.app/api"
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your_anon_key"
```

### Step 2: Copy All Variables
1. Open `.env.vercel` file
2. Select all (Ctrl+A)
3. Copy (Ctrl+C)

### Step 3: Paste in Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **"Bulk Edit"** button (top right)
5. Paste all variables
6. Select environment: **Production** ✓
7. Click **Save**

---

## ✅ METHOD 3: Use Vercel CLI with JSON

### Step 1: Create JSON File
Create `vercel-env.json`:

```json
{
  "DATABASE_URL": "postgresql://user:pass@host:5432/db",
  "JWT_SECRET": "your_jwt_secret",
  "NODE_ENV": "production",
  "CORS_ORIGIN": "https://your-domain.vercel.app",
  "VERCEL": "1",
  "SUPABASE_URL": "https://your-project.supabase.co",
  "SUPABASE_ANON_KEY": "your_anon_key",
  "SUPABASE_SERVICE_KEY": "your_service_key",
  "VITE_API_URL": "https://your-domain.vercel.app/api",
  "VITE_SUPABASE_URL": "https://your-project.supabase.co",
  "VITE_SUPABASE_ANON_KEY": "your_anon_key"
}
```

### Step 2: Import Using Script
```bash
# Install jq (JSON processor)
# Windows: choco install jq
# Mac: brew install jq

# Import all variables
cat vercel-env.json | jq -r 'to_entries[] | "\(.key)=\(.value)"' | while read line; do
  vercel env add $line production
done
```

---

## 🚀 AUTOMATED SCRIPT (EASIEST!)

I'll create a script that does this automatically for you.

### Windows Script: `IMPORT_ENV_TO_VERCEL.bat`

```batch
@echo off
echo ========================================
echo   IMPORT ENVIRONMENT VARIABLES TO VERCEL
echo ========================================
echo.

echo Checking if Vercel CLI is installed...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Vercel CLI not found!
    echo.
    echo Install it with: npm install -g vercel
    echo.
    pause
    exit /b 1
)

echo [OK] Vercel CLI found
echo.

echo Logging in to Vercel...
vercel login
echo.

echo Linking project...
vercel link
echo.

echo.
echo ========================================
echo   CHOOSE IMPORT METHOD
echo ========================================
echo.
echo 1. Import from .env.production (recommended)
echo 2. Import from backend/.env
echo 3. Manual entry (I'll guide you)
echo.
set /p choice="Enter choice (1-3): "

if "%choice%"=="1" (
    if exist .env.production (
        echo Importing from .env.production...
        for /f "tokens=*" %%a in (.env.production) do (
            echo Adding: %%a
            echo %%a | vercel env add production
        )
    ) else (
        echo [ERROR] .env.production not found!
    )
)

if "%choice%"=="2" (
    if exist backend\.env (
        echo Importing from backend/.env...
        for /f "tokens=*" %%a in (backend\.env) do (
            echo Adding: %%a
            echo %%a | vercel env add production
        )
    ) else (
        echo [ERROR] backend/.env not found!
    )
)

if "%choice%"=="3" (
    echo.
    echo Please add variables manually in Vercel Dashboard:
    echo https://vercel.com/dashboard
    echo.
    echo Go to: Settings → Environment Variables → Bulk Edit
    echo.
    start https://vercel.com/dashboard
)

echo.
echo ========================================
echo   IMPORT COMPLETE!
echo ========================================
echo.
pause
```

---

## ⚠️ IMPORTANT SECURITY NOTES

### ❌ DO NOT Commit These Files to Git:
```
.env.production
.env.production.local
.env.vercel
vercel-env.json
```

### ✅ Add to .gitignore:
```
# Environment files
.env*
!.env.example
vercel-env.json
```

### 🔒 Sensitive Variables (Backend Only):
These should NEVER be in frontend code:
- `DATABASE_URL`
- `JWT_SECRET`
- `SUPABASE_SERVICE_KEY`

### ✅ Safe for Frontend:
These can be exposed to frontend:
- `VITE_API_URL`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

## 📋 QUICK COMPARISON

| Method | Ease | Speed | Best For |
|--------|------|-------|----------|
| **Vercel CLI** | ⭐⭐⭐ | ⭐⭐⭐ | Automation, CI/CD |
| **Dashboard Bulk Edit** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | First-time setup |
| **Manual Entry** | ⭐⭐ | ⭐ | Few variables |
| **JSON Import** | ⭐⭐ | ⭐⭐⭐ | Advanced users |

---

## 🎯 RECOMMENDED WORKFLOW

### For First Deployment:
1. Use **Dashboard Bulk Edit** (easiest)
2. Copy from `ENV_VARIABLES_VERCEL.txt`
3. Paste in Vercel Dashboard
4. Done! ✅

### For Updates:
1. Use **Vercel CLI**
2. Update `.env.production`
3. Run: `vercel env add production`
4. Redeploy

---

## 🔄 SYNC ENVIRONMENT VARIABLES

### Pull from Vercel to Local:
```bash
vercel env pull .env.local
```

### Push from Local to Vercel:
```bash
vercel env add production < .env.production
```

### List All Variables:
```bash
vercel env ls
```

### Remove a Variable:
```bash
vercel env rm VARIABLE_NAME production
```

---

## ✅ VERIFICATION

After importing, verify in Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Check all variables are present
3. Verify they're assigned to **Production** environment
4. Redeploy your project

---

## 🚀 COMPLETE EXAMPLE

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Link project
vercel link

# 4. Create production env file
# (Copy from ENV_VARIABLES_VERCEL.txt)

# 5. Import variables
vercel env add DATABASE_URL production
# Enter value when prompted

# Or bulk import (PowerShell)
Get-Content .env.production | ForEach-Object {
    $parts = $_ -split '=', 2
    if ($parts.Length -eq 2) {
        $key = $parts[0]
        $value = $parts[1]
        Write-Host "Adding $key..."
        echo $value | vercel env add $key production
    }
}

# 6. Deploy
vercel --prod
```

---

## 📞 TROUBLESHOOTING

### "Vercel CLI not found"
```bash
npm install -g vercel
```

### "Not linked to a project"
```bash
vercel link
```

### "Invalid environment variable"
- Check for special characters
- Use quotes for values with spaces
- Remove comments from .env file

### "Variable not showing in deployment"
- Redeploy after adding variables
- Check variable is assigned to correct environment
- Verify variable name matches exactly

---

## 🎉 DONE!

Choose the method that works best for you. I recommend:
- **First time:** Dashboard Bulk Edit
- **Updates:** Vercel CLI

Your environment variables will be securely stored in Vercel and available to your deployment! 🚀
