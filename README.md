# NEC SMART MIRROR (MAC)

- https://github.com/MichMich/MagicMirror
- https://github.com/eouia/MMM-AssistantMk2
- https://github.com/eouia/MMM-Hotword

https://console.actions.google.com/project/nec-smart-mirror/overview

## Install
```sh
brew install sox

git clone git@github.com:dang1412/MagicMirror.git nec-magic-mirror
cd nec-magic-mirror
npm i

cd modules/MMM-AssistantMk2/
npm i
./node_modules/.bin/electron-rebuild
```

### Install MMM-Hotword

```sh
cd modules/MMM-Hotword
chmod +x trainer/trainer.sh

cd snowboy
npm install -y nan node-pre-gyp
./node_modules/node-pre-gyp/bin/node-pre-gyp clean configure build
npm install -y # Typescript error shown, no need this ?
npm install -y electron-rebuild
./node_modules/.bin/electron-rebuild
```

Check snowboy rebuild complete

```
ls lib/node/binding/Release
ls lib/node/index.js
```

### Gactions
(Already done with 2 actions REBOOT and PAGE for `nec-smart-mirror` project)

Go to https://developers.google.com/actions/tools/gactions-cli, download for Mac x86_64, save to folder
```
cd nec-smart-mirror/modules/MMM-AssistantMk2/gaction

```

Run gactions cli to register action
```
./gactions update --action_package actions.json --project nec-smart-mirror
./gactions test --action_package actions.json --project nec-smart-mirror
```

## Run

Create config file
```
cp config/config.dang.js config/config.js
```

Download OAuth2 credentials at https://console.actions.google.com/project/nec-smart-mirror/deviceregistration/ and save to
```
nec-magic-mirror/modules/MMM-AssistantMk2/credentials.json
```

Run
```
npm start dev
```

First time when `nec-magic-mirror/modules/MMM-AssistantMk2/profiles/default.json` not exists, do the some authorization steps.

After that check `nec-magic-mirror/modules/MMM-AssistantMk2/profiles/default.json` generated, authorization will be skipped next time.
