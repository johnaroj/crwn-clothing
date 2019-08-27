import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCyZCGg7nm6fCQ3ge3Gk5ZogIRUpW-5Rfk",
    authDomain: "crwn-db-course.firebaseapp.com",
    databaseURL: "https://crwn-db-course.firebaseio.com",
    projectId: "crwn-db-course",
    storageBucket: "",
    messagingSenderId: "1082915376176",
    appId: "1:1082915376176:web:9edf5099dcbc1c5a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;