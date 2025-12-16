@echo off
cls
echo ========================================
echo   Pushing Auth Fix to Vercel
echo ========================================
echo.
echo Fixed Issues:
echo  - Auth routes now use Prisma instead of JSON files
echo  - No more "mkdir /var/task/backend/data" error
echo  - Login will work after deployment
echo.
pause

echo.
echo Step 1: Adding changes...
git add .

echo.
echo Step 2: Committing...
git commit -m "Fix auth to use Prisma database instead of JSON files"

echo.
echo Step 3: Pushing to GitHub...
git push

echo.
echo ========================================
echo   Changes Pushed!
echo ========================================
echo.
echo Vercel will auto-deploy in 2-3 minutes
echo.
echo Then test at: https://magic-incubation.vercel.app
echo Login: admin / magic2024
echo.
pause
