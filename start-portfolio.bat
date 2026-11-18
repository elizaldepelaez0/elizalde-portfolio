@echo off
title Elizalde Portfolio Dev Server
echo ========================================================
echo   Starting Elizalde Jr. B. Pelaez Developer Portfolio
echo   Computer Programming NC-IV
echo ========================================================
echo.
set "PATH=C:\Users\Acer laptop\.gemini\antigravity\scratch\nodejs;%PATH%"
cd /d "C:\Users\Acer laptop\.gemini\antigravity\scratch\developer-portfolio"

echo Starting Vite development server...
echo.
npm run dev
pause
