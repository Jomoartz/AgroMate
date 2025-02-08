# NSO App

Mission Statement: Our mission is to empower consumers with knowledge and options for healthier living by providing a platform that certifies and showcases products free from specific ingredients such as seed oil. We aim to educate consumers on the benefits of avoiding certain ingredients and support manufacturers in highlighting their ingredient choices transparently.


## Table of Contents

- [Features](#features)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Prerequisites](#prerequisites)
- [How to Use the Project](#how-to-use-the-project)
  - [Install the Project](#install-the-project)
  - [Running the App on a Device](#running-the-app-on-a-device)
- [Technologies Used](#technologies-used)
- [Component Descriptions](#component-descriptions)

## Features

- **User Registration & Login**: Allows users to create accounts and log in to the application.
- **Product Filtering Based on Categories**: Users can filter products based on predefined categories.
- **Real-time Chat Between Buyers and Sellers**: Facilitates communication between buyers and sellers within the app.
- **Push Notifications**: Keeps users informed about important updates and activities.
- **User Profiles and Product Listings**: Users view their published products.
- **Image Uploads and Gallery for Products**: Supports uploading and displaying images for products.

## Setting Up the Development Environment

### Prerequisites

- **Dependencies and Preferred Editor**:

  - Node.js: [https://nodejs.org/en](https://nodejs.org/en)
  - Visual Studio Code: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

- **Extensions**:

  - ESLint
  - (Optional) Material Icon Theme - Philipp Kief
  - Prettier - Esben Petersen
  - React Native Tools - Microsoft
  - React Native/React/Redux Snippets - EQuimper

- **Tool to Run App on Physical Device**:

  - Expo Go

- **Tools to Run App on Virtual Simulators**:
  - Xcode (for iOS simulator): [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/)
  - Android Studio (for Android emulator): [https://developer.android.com/studio](https://developer.android.com/studio)
  - Resource for integrating Android Studio emulator with Expo: [https://docs.expo.dev/workflow/android-studio-emulator/](https://docs.expo.dev/workflow/android-studio-emulator/)
  - Resource for integrating Xcode simulator with Expo: [https://docs.expo.dev/workflow/ios-simulator/](https://docs.expo.dev/workflow/ios-simulator/)

## How to Use the Project

### Install the Project

- Clone the Bitbucket repository (develop branch):
  `git clone https://username@bitbucket.org/KevinOrfas/nso.git`
- Install dependencies:
  `npm install`
- Run ESLint to check that all files follow linting rules:
  `npx run lint`
- Run Prettier to format the code:
  `npx run format`

### Running the App on a Device

- Start the development server:
  `npx expo start`
- **Expo Client**: Install the Expo Go app on your physical device (iOS/Android) or ensure it's available on your virtual device.
- **Android Studio**: Set up an Android Virtual Device (AVD) if you plan to use an Android emulator.
- **Xcode**: Ensure Xcode is installed and properly configured if you plan to use an iOS simulator.

#### Technologies Used

- **React Native**
- **Expo**
- **Firebase** (for authentication and database)
- **Bugsnag** (for error tracking)


#### Component Descriptions:

- **api**: Handles API endpoints.
- **assets**: Contains pictures, animations, and other media files.
- **auth**: Manages user authentication using Firebase.
- **components**: Contains reusable React Native components for the app�s interface.
- **config**: Manages reusable color styles, Firebase configuration, and different configurations for the app based on the environment (development, staging, or production).
- **hooks**: Contains custom reusable React hooks.
- **navigation**: Manages navigation across screens and tabs.
- **screens**: Contains all the user interfaces of the project.
- **utility**: Handles Bugsnag integration and React Native Async Storage.
