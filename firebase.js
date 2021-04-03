import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDAa-xhrhDnQCbsM_ixSiWh3TAnSsF7Ses",
    authDomain: "relpi-taks.firebaseapp.com",
    databaseURL: "https://relpi-taks-default-rtdb.firebaseio.com",
    projectId: "relpi-taks",
    storageBucket: "relpi-taks.appspot.com",
    messagingSenderId: "516570845793",
    appId: "1:516570845793:web:ac4916e6e3342266931020"
    
});

const db = firebase.firestore();

export {db};