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
```sh
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_DIRETORIO>
```

## Instale Dependências

1:Execute o install.bat para instalar as dependências automaticamente.
Ou, se o install.bat não funcionar, Instale manualmente os módulos necessários com:
```sh npm install node-cmd readline dotenv ```


