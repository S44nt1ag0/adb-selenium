const comando = require("./utils/shell")

async function principal(device, app, config) {

    console.log({
        iniciado: true,
        device: device,
        app: app,
        config: config
    })

    await comando.limpar(app, 3000)
    await comando.abrir(app, 10000)
    await comando.scroll(1000)
    await comando.scroll(1000)
    await comando.scroll(1000)
    await comando.scroll(1000)
    await comando.scroll(1000)
    await comando.scroll(1000)
    await comando.scroll(1000)
    await comando.close(app)

}

module.exports = {
    principal
}