@echo off
echo Starting both main application and admin application...
echo.
echo Main app will run on: http://localhost:5173
echo Admin app will run on: http://localhost:3001
echo.
echo Press Ctrl+C to stop both servers
echo.

start "Main App" cmd /k "npm run dev"
start "Admin App" cmd /k "cd Admin && npm run dev"

echo Both servers are starting...
echo You can close this window once both servers are running.
pause
