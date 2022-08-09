# Opus React Native Project

Mobile App UI Only.

## Requirements

- Mac OS X
- [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) + react-native-cli v12.16 or newer
- IDE: VSCode with [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed. Or any IDE that support ESLint integration.

## Running project locally

Runs the app in the development mode.

1. Make sure to create a branch and a pull request **before starting development**.

```sh
git checkout -b https://github.com/taipham1803/opus
yarn && yarn pod
```

2. Open XCode and run node server

```sh 
yarn c
```
3. Run App from Xcode

## Standards

### Code Style

- [TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide) + [Airbnb Style Guide](https://github.com/airbnb/javascript).
- Code will be checked by linter (ESLint) before committing.

### Commit message

- Commit message has to follow [conventional commit](https://conventionalcommits.org/) format.


## Available Scripts

- Open xcode & vscode & start node server 
```sh 
yarn c
```

- Start node server
```sh 
yarn dev
```

- Run pod install in root project
```sh 
yarn pod
```

- Start iOS project in Xcode
```sh 
yarn xcode
```

- Open android project in Android Studio
```sh 
yarn studio
```

## Technologies

- TypeScript v4.6.3
- React Native v0.68.1, React v17.0.2
- State management: MobX, React Context
- ESLint
- Test: jest
