@echo off
echo ========================================
echo   PUSH CODE TO GITHUB
echo   Ready for Fresh Vercel Deployment
echo ========================================
echo.
echo This will push all your code to GitHub
echo so you can deploy it on Vercel.
echo.
pause

echo.
echo [1/3] Adding all files...
git add .

echo.
echo [2/3] Committing changes...
git commit -m "Ready for fresh Vercel deployment with all fixes"

echo.
echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   CODE PUSHED TO GITHUB!
echo ========================================
echo.
echo Next steps:
echo.
echo 1. Open: https://vercel.com/dashboard
echo 2. Click: "Add New..." -^> "Project"
echo 3. Import your GitHub repository
echo 4. Follow: FRESH_VERCEL_DEPLOYMENT.md
echo.
echo IMPORTANT FILES:
echo   - FRESH_VERCEL_DEPLOYMENT.md (Complete guide)
echo   - ENV_VARIABLES_COPY_PASTE.txt (Copy-paste variables)
echo   - DEPLOYMENT_STEPS_CHECKLIST.md (Track progress)
echo.
echo Environment variables ready in:
echo   ENV_VARIABLES_COPY_PASTE.txt
echo.
pause
