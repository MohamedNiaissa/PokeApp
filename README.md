# Projet PokeQuiz

## Présentation Rapide du Projet:
Vous êtes un chasseur de Pokémon ayant la possibilité de capturer des Pokémon à travers un quiz (incluant cris, taille, poids, type). Vous pouvez également retrouver vos Pokémon capturés dans la section Pokédex.

## Développeurs:
- Mohamed Niaissa
- Philémon Wild
- Héloïse Le Lez

## API Utilisée:
L'API utilisée est PokéApi. Pour des informations détaillées sur son utilisation, veuillez consulter la [documentation](https://pokeapi.co/docs/v2).

## Modules Utilisés:
- react-native-sound: Ce module a été utilisé pour jouer le son du cri d'un Pokémon durant le quiz.
- pokenode-ts: Ce module nous sert de client pour les différents appels API que nous utilisons dans notre application pour obtenir des informations sur les Pokémon.

## Fonctionnalités de l'Application:
Notre application est composée des écrans suivants: Connexion, Inscription, Pokédex, Détail, Catch, Profil. La persistance de notre application est basée sur l'AsyncStorage. De plus, lorsque l'utilisateur se connecte ou s'inscrit, ses données (ID, pseudo, mot de passe,chemin ou lien photo) sont stockées dans le cache et dans notre store (sans le mot de passe), permettant une meilleure gestion de l'application.

- L'écran Pokédex contient deux sections: la première section affiche la liste de tous les Pokémon, la seconde section affiche la liste des Pokémon capturés.
- L'écran Détail est accessible en cliquant sur un Pokémon déjà capturé depuis la liste des Pokémon capturés. Cet écran affiche plus d'informations sur le Pokémon sélectionné (poids, taille, type, nom, cris et image).
- L'écran Catch génère constamment aléatoirement différentes questions avec deux propositions de réponse (une bonne et une mauvaise réponse). Si l'utilisateur répond correctement, le Pokémon est capturé et donc inscrit dans le cache parmi la liste de ses Pokémon capturés. Si la question concerne le cri, l'utilisateur possède un bouton permettant d'écouter les cris au-dessus de chaque élément de réponse.
- L'écran Profil permet de retrouver les informations de l'utilisateur telles que son nom, sa photo de profil (récupérée depuis le store) ainsi que le nombre de Pokémon capturés (récupéré depuis le cache).

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.jsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
