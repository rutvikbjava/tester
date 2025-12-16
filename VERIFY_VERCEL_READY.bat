@echo off
echo ========================================
echo   VERCEL READINESS VERIFICATION
echo ========================================
echo.

echo [CHECK 1] Verifying Prisma Client...
cd backend
call npx prisma generate >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Prisma Client generated successfully
) else (
    echo [FAIL] Prisma Client generation failed
    echo Run: cd backend ^&^& npx prisma generate
)
cd ..
echo.

echo [CHECK 2] Verifying server.js exports...
findstr /C:"export default app" backend\server.js >nul
if %errorlevel% equ 0 (
    echo [OK] Server exports app for Vercel
) else (
    echo [FAIL] Server missing export statement
)
echo.

echo [CHECK 3] Checking for JSON file dependencies...
findstr /S /C:"from '../utils/db.js'" backend\routes\*.js >nul 2>&1
if %errorlevel% equ 0 (
    echo [WARN] Some routes still use JSON file storage
    echo Check: backend/routes/ for db.js imports
) else (
    echo [OK] No JSON file dependencies found
)
echo.

echo [CHECK 4] Verifying vercel.json exists...
if exist vercel.json (
    echo [OK] vercel.json configuration found
) else (
    echo [FAIL] vercel.json not found
)
echo.

echo [CHECK 5] Checking package.json build script...
findstr /C:"vercel-build" package.json >nul
if %errorlevel% equ 0 (
    echo [OK] vercel-build script configured
) else (
    echo [FAIL] vercel-build script missing
)
echo.

echo [CHECK 6] Verifying Prisma schema...
if exist backend\prisma\schema.prisma (
    echo [OK] Prisma schema found
) else (
    echo [FAIL] Prisma schema not found
)
echo.

echo ========================================
echo   VERIFICATION COMPLETE
echo ========================================
echo.
echo If all checks passed, you're ready to deploy!
echo.
echo Next steps:
echo 1. Run: DEPLOY_TO_VERCEL.bat
echo 2. Or manually: git add . ^&^& git commit -m "Ready" ^&^& git push
echo 3. Deploy on Vercel: https://vercel.com
echo.
echo Documentation:
echo - VERCEL_DEPLOYMENT_READY.md (deployment guide)
echo - VERCEL_FIXES_SUMMARY.md (technical details)
echo - ENV_VARIABLES_VERCEL.txt (environment variables)
echo.
pause
