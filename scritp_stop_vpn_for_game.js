import psList from 'ps-list';
import { exec } from 'child_process';
import 'dotenv/config';

const GAME_NAME = process.env.GAME_NAME; // Cambia esto por el nombre del ejecutable del juego
const VPN_NAME = process.env.VPN_PROCESS_NAME; // Cambia esto por el nombre del proceso de la VPN

async function checkProcesses() {
    const processes = await psList();
    const gameRunning = processes.some(p => p.name.toLowerCase() === GAME_NAME.toLowerCase());
    const vpnRunning = processes.some(p => p.name.toLowerCase() === VPN_NAME.toLowerCase());

    if (gameRunning && vpnRunning) {
        console.log(`El juego ${GAME_NAME} está en ejecución. Cerrando ${VPN_NAME}...`);
        exec(`taskkill /F /IM ${VPN_NAME}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al cerrar la VPN: ${error.message}`);
                return;
            }
            console.log(`${VPN_NAME} cerrado con éxito.`);
        });
    }
}

// Ejecuta la función cada 5 segundos
setInterval(checkProcesses, 5000);