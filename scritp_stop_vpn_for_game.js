import psList from 'ps-list';
import { exec } from 'child_process';
import 'dotenv/config';

const APP_FIRST = process.env.APP_FIRST; // Cambia esto por el nombre del ejecutable del juego
const APP_SECOND = process.env.APP_SECOND; // Cambia esto por el nombre del proceso de la VPN

async function checkProcesses() {
    const processes = await psList();
    const gameRunning = processes.some(p => p.name.toLowerCase() === APP_FIRST.toLowerCase());
    const vpnRunning = processes.some(p => p.name.toLowerCase() === APP_SECOND.toLowerCase());

    if (gameRunning && vpnRunning) {
        console.log(`La app ${APP_FIRST} está en ejecución. Cerrando ${APP_SECOND}...`);
        exec(`taskkill /F /IM ${APP_SECOND}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al cerrar la app: ${error.message}`);
                return;
            }
            console.log(`${APP_SECOND} cerrado con éxito.`);
        });
    }
}

// Ejecuta la función cada 5 segundos
setInterval(checkProcesses, 5000);