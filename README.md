# Projeto de Emulação Android

Este projeto configura e automatiza a interação com um aplicativo emulador Android usando ADB e Node.js. Ele permite que você controle e teste aplicativos emuladores por meio de comandos automatizados.

## 📦 Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **ADB (Android Debug Bridge)**: Necessário para interagir com o emulador Android.

## 📥 Instalação

### 1. Instale o ADB

1. Baixe e extraia o ADB [aqui](https://dl.google.com/android/repository/platform-tools-latest-windows.zip).
2. Adicione a pasta extraída às variáveis de ambiente do sistema.
3. Verifique a instalação executando `adb` no CMD.

### 2. Configure o Dispositivo

1. Inicie o emulador Android.
2. Execute `adb devices` no CMD para listar dispositivos conectados.
3. Se o dispositivo não aparecer, reinicie o servidor ADB com:
   ```sh
   adb kill-server
   adb start-server

4) Após obter o ID do dispositivo (ex: 127.0.0.1:62025), adicione-o ao arquivo .env.
   
## Baixe o Projeto

1: Clone este repositório:
```
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_DIRETORIO>
```

## Instale Dependências
Abra o Cmd e digite ``` npm init ``` aperte enter até acabar!
Execute o install.bat para instalar as dependências automaticamente.
Ou, se o install.bat não funcionar, Instale manualmente os módulos necessários com:
``` npm install [node-cmd, readline, dotenv, fs, path] ```

##🚀 Uso

Execute o projeto com
``` node app.js ```

Siga as instruções fornecidas pelo aplicativo.

Funções Básicas

``` 
await comando.abrir(app, 6000) -> Responsavel por Abrir a Aplicação Escolhida, no qual o 6000 é o valor de espera apos abrir o aplicativo "pois cada app tem um delay para abrir completamente e isso voce pode editar"
await comando.tap(x, y, 1000) -> Responsavel por executar click em alguma parte da tela, tendo 2 parametros e o delay em ms que voce pode editar, voce pode descobrir o x,y onde voce gostaria de clicar nas opções de desenvolvedor de seu aparelho e acessar a opc de "Localização do Ponteiro".
await comando.write("algum texto", 1000) -> Responsavel por escrever em algum imput já selecionado, onde temois 2 parametros uma string e um delay.
await comando.enter(1000) -> Responsavel por apos a escrita ou qualquer outro feito ser precionado o "enter" ou "buscar", no qual possui apenas o delay de parametro.
await comando.tela() -> Responsavel por printar o XML da tela atual que o android esta, dando a opc de verificação se o que procura esta na pagina, pois o xml possibilita a leitura de algumas palavras chaves mostrada na pagina, simplesmente de um console.log nela e vera os dados da pagina!
await comando.close(app) -> Responsavel por fechar a aplicação aberta, no qual temos apenas o parametro app que seria o pakage.
await comando.scroll(1000) -> Responsavel por dar Scroll na Pagina, seguido de um delay de 1000ms.

```

## Criação de Configuração
Crie um arquivo de configuração em ./configs com a seguinte estrutura:

```
const comando = require("./utils/shell");
var cmd = require('node-cmd');

async function principal(device, app, config) {
    console.log({
        iniciado: true,
        device: device,
        app: app,
        config: config
    });
    
    // Códigos personalizados aqui //
}

module.exports = {
    principal
};

```

Lembre-se de colocar esse código na pasta ./configs e com a extensão .js. Para escolher sua configuração, inicie o programa com node app e selecione sua configuração.

##⚠️ Recomendações

Utilize o emulador NOX para melhores resultados.
Ajuste os delays e coordenadas conforme necessário para seu aplicativo e emulador.

## 💬 Suporte

Se você tiver problemas ou perguntas, sinta-se à vontade para abrir uma issue neste repositório ou entrar em contato.
Espero que este README.md ajude a documentar seu projeto! Se precisar de mais alguma coisa, estou à disposição.
