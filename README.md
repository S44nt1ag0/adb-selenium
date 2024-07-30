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

1:Execute o install.bat para instalar as dependências automaticamente.
Ou, se o install.bat não funcionar, Instale manualmente os módulos necessários com:
``` npm install [node-cmd, readline, dotenv, fs, path] ```

##🚀 Uso

Execute o projeto com
``` node app.js ```

Siga as instruções fornecidas pelo aplicativo.

Funções Básicas

``` 
await comando.abrir(app, delay): Abre o aplicativo especificado após um delay.
await comando.tap(x, y, delay): Realiza um clique na coordenada (x, y) com um delay.
await comando.write(text, delay): Escreve texto no input selecionado com um delay.
await comando.enter(delay): Pressiona a tecla Enter após um delay.
await comando.tela(): Captura o XML da tela atual.
await comando.close(app): Fecha o aplicativo especificado.
await comando.scroll(delay): Rola a página com um delay.

```

## Criação de Configuração


