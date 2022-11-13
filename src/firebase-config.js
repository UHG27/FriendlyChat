/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 import { initializeApp } from "firebase/app";

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCNnYOuUE3L6Kftg2h_DVLAfTImYcGdBlM",
  authDomain: "friendlychat-b337d.firebaseapp.com",
  projectId: "friendlychat-b337d",
  storageBucket: "friendlychat-b337d.appspot.com",
  messagingSenderId: "867619531548",
  appId: "1:867619531548:web:248edf316e95d7c5bae8d9"
};

const firebaseConfig = {
  apiKey: "AIzaSyCNnYOuUE3L6Kftg2h_DVLAfTImYcGdBlM",
  authDomain: "friendlychat-b337d.firebaseapp.com",
  projectId: "friendlychat-b337d",
  storageBucket: "friendlychat-b337d.appspot.com",
  messagingSenderId: "867619531548",
  appId: "1:867619531548:web:248edf316e95d7c5bae8d9"
};

const app = initializeApp(config);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}