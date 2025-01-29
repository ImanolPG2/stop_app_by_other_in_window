# Stop App by Other In Windows

## Descripción
Este pequeño codigo lo que hace es parar una app cuando abras otra de forma automatica utilizando node y pm2, util para cerrar app cuando vallas hacer algo y que no se te olvide cerrar otra que te causa problema. Estos paso estan creado para que cada ves que inicies session en windows en programa se abra y comienze a funcionar. 

## Requisitos Previos

- Node.js (v14 o superior)
- pm2
- ps-list

## Ejecución
1. 
```bash
npm install -g pm2
```
2. 
```bash
git clone https://github.com/ImanolPG2/stop_app_by_other_in_window.git
```
3.
```bash
npm install
```
4. Crear un archivo .env con tus variables con este formato: 
```bash
GAME_NAME = EpicGamesLauncher.exe
VPN_NAME = ProtonVPN.exe
```
5.
```bash
pm2 start stop_app_by_other_in_window.js --name "game-vpn-monitor"
```
6.
```bash
pm2 save
```
7.
```bash
Win + R 
```
8. Escribe
```bash
shell:startup
```
Presiona
```bash
Enter
```
Copia y pega el archivo que terminar con .bat en la carpeta
```bash
pm2_start.bat
```
Esto hará que PM2 restaure los procesos cuando inicies sesión en Windows.

## Autores

- Imanol Perez Guzman