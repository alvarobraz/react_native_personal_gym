

<p align="center">
  <a href="https://react.dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" width="200" alt="React Logo" /></a>
</p>
<p align="center">
  Aplicação em React Native/TypeScript - Séries de treinos para academias 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/react_native_personal_gym"/>

  <a href="https://reactnative.dev/">
    <img alt="Made by React native" src="https://img.shields.io/badge/made%20by-reactnative-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/react_native_personal_gym/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/react_native_personal_gym">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/react_native_personal_gym">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Projeto em React Native de cadastros de alunos e séries de uma academia para serem executadas!

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [React Natvive](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-navigation](https://reactnavigation.org/)
- [native-base](https://nativebase.io/)
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://www.npmjs.com/package/yup)
- [expo-file-system](https://docs.expo.dev/versions/latest/sdk/filesystem/)
- [expo-google-fonts](https://docs.expo.dev/develop/user-interface/fonts/)


## Estrutura ##
```
.
├── app.json
├── App.tsx
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── metro.config.js
├── package.json
├── patches
│   └── native-base+3.4.28.patch
├── README.md
├── src
│   ├── assets
│   │   ├── background@2x.png
│   │   ├── background@3x.png
│   │   ├── background.png
│   │   ├── body.svg
│   │   ├── history.svg
│   │   ├── home.svg
│   │   ├── logo.svg
│   │   ├── profile.svg
│   │   ├── repetitions.svg
│   │   ├── series.svg
│   │   ├── userPhotoDefault@2x.png
│   │   ├── userPhotoDefault@3x.png
│   │   └── userPhotoDefault.png
│   ├── components
│   │   ├── Button.tsx
│   │   ├── ExerciseCard.tsx
│   │   ├── Group.tsx
│   │   ├── HistoryCard.tsx
│   │   ├── HomeHeader.tsx
│   │   ├── Input.tsx
│   │   ├── Loading.tsx
│   │   ├── ScreenHeader.tsx
│   │   └── UserPhoto.tsx
│   ├── routes
│   │   ├── app.routes.tsx
│   │   ├── auth.routes.tsx
│   │   └── index.tsx
│   ├── screens
│   │   ├── Exercise.tsx
│   │   ├── History.tsx
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── theme
│   │   └── index.ts
│   └── @types
│       ├── FileSystem.d.ts
│       ├── png.d.ts
│       └── svg.d.ts
├── tsconfig.json
└── yarn.lock

```

## :white_check_mark: Requerimentos ##

- [React Native](https://reactnative.dev/)
- [expo](https://expo.dev/)
- [npx](https://www.npmjs.com/package/npx)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/react_native_personal_gym

# Access
$ cd react_native_personal_gym

# Version node
$ nvm use 18.16.1

# Install dependencies
$ npx expo install

# Run the project
$ npx expo start

# The server will initialize in the <http://localhost:3333>
```

React Native is [MIT licensed](LICENSE).
