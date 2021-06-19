import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAo4g3xkqY6e6_9eZLiG2hFFPZAdwCR1k0",
    authDomain: "gen-17-userapp.firebaseapp.com",
    projectId: "gen-17-userapp",
    storageBucket: "gen-17-userapp.appspot.com",
    messagingSenderId: "749214132434",
    appId: "1:749214132434:web:14a2aeb20e800e6d53650b"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;