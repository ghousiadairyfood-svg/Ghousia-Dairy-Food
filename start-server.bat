@echo off
echo Starting Ghousia Dairy Food dev server...
echo.
echo PC:     http://localhost:8080/
echo Mobile: http://192.168.18.25:8080/
echo.
echo Keep this window open to keep the server running.
echo Press Ctrl+C to stop.
echo.
cd /d "e:\Ghousia-Dairy-Food"
npm run dev -- --host 0.0.0.0
pause
