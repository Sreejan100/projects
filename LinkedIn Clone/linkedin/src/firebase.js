import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA5Gpy7tiTKSN1sjTHopneTc6niHpUfijA",
    authDomain: "linkedin-dd2db.firebaseapp.com",
    projectId: "linkedin-dd2db",
    storageBucket: "linkedin-dd2db.appspot.com",
    messagingSenderId: "373177043875",
    appId: "1:373177043875:web:f278636f30d1252e5b2816",
    measurementId: "G-MJ9XV2ZWEK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};