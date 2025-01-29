import psList from 'ps-list';
import { exec } from 'child_process';
import 'dotenv/config';

const APP_FIRST = process.env.APP_FIRST; // Estas es la variable del primera app que se va a ejecutar
const APP_SECOND = process.env.APP_SECOND; // Estas es la variable de la segunda app que se va a cerrar

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