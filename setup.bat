@echo off
echo ==========================================
echo      Autohive Project Setup Script
echo ==========================================
echo.
echo ignore the "Active code page: 65001" message.
echo It just means your terminal supports special characters.
echo.
echo 1. Installing dependencies (npm install)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm install failed. Please install Node.js from nodejs.org
    pause
    exit /b %errorlevel%
)

echo.
echo 2. Installation Complete!
echo.
echo ==========================================
echo To start the app, run: npm run dev
echo ==========================================
echo.
pause
