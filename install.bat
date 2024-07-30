@echo off


where npm >nul 2>&1
if errorlevel 1 (
    echo O npm não está instalado. Por favor, instale o Node.js e o npm primeiro.
    exit /b 1
)

if not exist package.json (
    echo Inicializando o npm...
    npm init -y
)

echo Instalando módulos Node.js...
npm install node-cmd
npm install readline
npm install dotenv
npm install fs
npm install path

echo Módulos instalados com sucesso.
pause