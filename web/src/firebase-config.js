/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBxyxtLayUNCY_uNGX4Gq6jOYg3fSOPFjk",
  authDomain: "friendlychat-435b2.firebaseapp.com",
  projectId: "friendlychat-435b2",
  storageBucket: "friendlychat-435b2.appspot.com",
  messagingSenderId: "169067256990",
  appId: "1:169067256990:web:6b8532b09a6bb468d1ef8f"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}