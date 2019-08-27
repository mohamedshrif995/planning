import firebase from '/firebase/app'
import  'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCg5_mnKaKYiEapuWkGD0gKD7z4rF1Ds3o",
    authDomain: "planing-web.firebaseapp.com",
    databaseURL: "https://planing-web.firebaseio.com",
    projectId: "planing-web",
    storageBucket: "",
    messagingSenderId: "710209167958",
    appId: "1:710209167958:web:aa9b71cde0a9a770"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapShots:true})
  export default firebase