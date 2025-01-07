import dgram from 'dgram';
import { Client } from 'basic-ftp';

/**
 * Descobre servidores FTP na rede através de broadcast.
 */
export async function discoverFtpServer() {
    const udpClient = dgram.createSocket('udp4');

    // Enviar pacote de broadcast
    udpClient.send(Buffer.from('DISCOVER_FTP_SERVER'), 41234, '255.255.255.255', (err) => {
        if (err) {
            console.error('Erro ao enviar pacote de broadcast:', err);
            udpClient.close();
            return;
        }
        console.log('Pacote de descoberta enviado.');
    });

    // Receber resposta do servidor
    udpClient.on('message', async (msg, rinfo) => {
        console.log(`Servidor encontrado: ${msg.toString()}`);

        // Conectar ao servidor FTP
        const client = new Client();

    try {

        const host = rinfo.address ?? '0.0.0.0';

        await client.access({
                host: host,
                user: 'usuario',
                password: 'senha',
            });
            console.log('Conectado ao servidor FTP');

            // Realizar operações de FTP aqui...
            const list = await client.list();
            console.log('Arquivos no servidor:', list);

            client.downloadTo('local.txt', list[0].name);

        } catch (err) {
            console.error('Erro ao conectar ao servidor FTP:', err);
        } finally {
            // client.close();
        }
        
        
    });

    // Fechar o socket após um tempo ou condição específica
    setTimeout(() => {
        // udpClient.close();
        console.log('Socket UDP fechado.');
    }, 5000); // Ajuste o tempo conforme necessário

    
}

// Para garantir que o código não seja executado ao importar, você pode usar um bloco condicional
if (require.main === module) {
    discoverFtpServer();
}