import { FtpSrv } from "ftp-srv";
import dgram from "dgram";

/**
 * Inicia o servidor FTP e o servidor UDP para descoberta.
 */
export function startServers() {
    // Configurar o servidor FTP
    const ftpServer = new FtpSrv({
        url: 'ftp://0.0.0.0:21',
        anonymous: false, // Defina como true se quiser permitir acesso anônimo
        // Você pode definir um método de autenticação aqui
        greeting: 'Bem-vindo ao Servidor FTP',
    });

    // Adicionar listener para autenticação
    ftpServer.on('login', (data, resolve, reject) => {
        const { username, password } = data;

        // Aqui você pode implementar sua lógica de autenticação
        if (username === 'usuario' && password === 'senha') {
            resolve({ root: './FTP/root' }); // Diretório raiz do usuário
        } else {
            reject(new Error('Credenciais inválidas'));
        }
    });

    ftpServer.listen()
        .then(() => {
            console.log('Servidor FTP ativo na porta 21');
        })
        .catch((err: any) => {
            console.error('Erro ao iniciar o servidor FTP:', err);
        });

    // Configurar o socket UDP para descoberta
    const udpServer = dgram.createSocket('udp4');
    udpServer.on('message', (msg, rinfo) => {
        const response = Buffer.from(`FTP Server at ${rinfo.address}:21`);
        udpServer.send(response, rinfo.port, rinfo.address);
    });
    
    udpServer.bind(41234, () => {
        console.log('Servidor UDP ativo na porta 41234');
    });

    udpServer.on('error', (err) => {
        console.error('Erro no servidor UDP:', err);
        udpServer.close();
    });
}

if (require.main === module) {
    startServers();
}