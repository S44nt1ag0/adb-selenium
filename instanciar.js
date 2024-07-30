const fs = require('fs');
const path = require('path');
const readline = require('readline');
const automatize = ("automatize");

const directory = path.join(__dirname, 'configs');

function init(device, app) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(`[-]Erro ao ler pasta de configurações`);
            return;
        }

        const jsFiles = files.filter(file => path.extname(file) === '.js').map(file => path.basename(file, '.js'));

        if (jsFiles.length === 0) {
            console.log('[-]Nenhum arquivo .js encontrado em Config');
            return
        }

        console.log('[+]Qual Config Deseja Usar?');

        jsFiles.forEach((file, index) => {
            console.log(`${index + 1}: ${file}`);
        })

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('[+]Escolha a Configuração? ', (answer) => {

            const choice = parseInt(answer, 10);

            if (choice >= 1 && choice <= jsFiles.length) {

                let configs = `${jsFiles[choice - 1]}.js`;
                const config = require("./configs/" + configs);
                let format_app = app.replace("package:", "")
                config.principal(device, format_app, configs);

            } else {
                console.log('[-]Escolha inválida.');
            }

            rl.close();

        })

    });

}

module.exports = {
    init
}