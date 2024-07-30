// shell.js
var cmd = require('node-cmd');

const shell = {
    esperar: async function (ms) {
        await new Promise(resolve => setTimeout(resolve, ms));
    },
    abrir: async function (apk, delay) {
        cmd.runSync(`adb shell monkey -p ${apk} 1`);
        await this.esperar(delay);
        console.log(`Aplicativo ${apk} Aberto`);
    },
    tap: async function (ponteiro_x, ponteiro_y, delay) {
        cmd.runSync(`adb shell input tap ${ponteiro_x} ${ponteiro_y}`);
        await this.esperar(delay);
        console.log(`Click Feito!`);
    },
    write: async function (escrita, delay) {
        cmd.runSync(`adb shell input text '${escrita}'`);
        await this.esperar(delay);
        console.log(`Escrita Feita!`);
    },
    enter: async function (delay) {
        cmd.runSync("adb shell input keyevent 66");
        await this.esperar(delay);
        console.log(`Enter Apertado!`);
    },
    tela: async function () {
        cmd.runSync("adb shell uiautomator dump");
        console.log("Xml gerado, pronto para ler!")
        let escrita = cmd.runSync("adb shell cat /sdcard/window_dump.xml");
        return escrita.data
    },
    scroll: async function (delay) {
        cmd.runSync("adb shell input swipe 500 1000 300 300");
        console.log("Scroll Realizado!")
        await this.esperar(delay);
    },
    limpar: async function (apk, delay) {
        cmd.runSync(`adb shell pm clear ${apk}`);
        console.log("Aplicativo Limpo!")
        await this.esperar(delay);
    },
    close: async function (apk) {
        cmd.runSync(`adb shell am force-stop ${apk}`);
        console.log("Aplicativo Fechado!")
    }
};

module.exports = shell;