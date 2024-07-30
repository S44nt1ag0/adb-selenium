var cmd = require('node-cmd');
const readline = require('readline');
const instancia = require('./instanciar');
require("dotenv").config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function configurar() {
    rl.question('[+]Configurar ADB (s/n) ', (name) => {

        if (name == "s") {
            console.log("[+]Configurando...")
            cmd.runSync('adb kill-server');
            cmd.runSync('adb start-server');
            console.log("[+]Servidor Resetado, execute Novamente!")
            rl.close();
            return;
        }

        listar();

    });
}

function listar() {
    console.log("[+]Listando...");
    console.log(`Device Achado -> ${process.env.device}`)
    const device = process.env.device;
    return listar_apps(device);
}

function listar_apps(device) {
    cmd.runSync(`adb connect ${device}`);
    console.log("[+]Listando Aplicações do Device")
    let list_apk = cmd.runSync(`adb shell pm list packages -3`);
    let string = list_apk.data.toString();
    console.log(string)
    rl.question('[+]Qual Aplicativo deseja Automatizar? ', (app) => {
        work(device, app)
    })

}

function work(device, app) {
    instancia.init(device, app);
}

module.exports = {
    configurar,
    listar
}