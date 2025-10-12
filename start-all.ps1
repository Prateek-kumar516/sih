Write-Host "Starting both main application and admin application..." -ForegroundColor Green
Write-Host ""
Write-Host "Main app will run on: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Admin app will run on: http://localhost:3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Yellow
Write-Host ""

# Start both servers concurrently
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd Admin; npm run dev"

Write-Host "Both servers are starting in separate windows..." -ForegroundColor Green
Write-Host "You can close this window once both servers are running." -ForegroundColor Yellow
