import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase configuration
const config = {
    apiKey: "AIzaSyAEsome5RFYpu00j8qkdmw5mR8wx63Syiw",
    authDomain: "crown-db-63dc1.firebaseapp.com",
    databaseURL: "https://crown-db-63dc1.firebaseio.com",
    projectId: "crown-db-63dc1",
    storageBucket: "crown-db-63dc1.appspot.com",
    messagingSenderId: "493164146736",
    appId: "1:493164146736:web:8c73f396ab91674eea3df5",
    measurementId: "G-988FJQB8QF"
  };

  // Initialize Firebase
  firebase.initializeApp(config);  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;