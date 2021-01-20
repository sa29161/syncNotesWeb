import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAtUn6xQdeW8i3XtMTg-ksjGfrXVgqNnuo",
    authDomain: "syncnotes-7daca.firebaseapp.com",
    databaseURL: "https://syncnotes-7daca-default-rtdb.firebaseio.com",
    projectId: "syncnotes-7daca",
    storageBucket: "syncnotes-7daca.appspot.com",
    messagingSenderId: "509175504026",
    appId: "1:509175504026:web:788ee8ce9854ee48375323",
    measurementId: "G-LFZGDZ5HDP"
  };
 const fire =  firebase.initializeApp(firebaseConfig);
 
export default fire;