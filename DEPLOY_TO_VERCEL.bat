@echo off
echo ========================================
echo   VERCEL DEPLOYMENT - READY TO DEPLOY
echo ========================================
echo.

echo [1/4] Checking Git status...
git status
echo.

echo [2/4] Adding all changes...
git add .
echo.

echo [3/4] Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Vercel deployment ready - all fixes applied

git commit -m "%commit_msg%"
echo.

echo [4/4] Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo   PUSH COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Click "Import Project"
echo 3. Select your GitHub repository
echo 4. Add environment variables (see VERCEL_DEPLOYMENT_READY.md)
echo 5. Click "Deploy"
echo.
echo For detailed instructions, see:
echo - VERCEL_DEPLOYMENT_READY.md
echo - VERCEL_FIXES_SUMMARY.md
echo.
pause
