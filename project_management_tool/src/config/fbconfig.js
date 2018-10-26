import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyCwTt5l5DDNvyry0YIchKEDEpiLv4mZkbE",
    authDomain: "projectmanagementtool-5528b.firebaseapp.com",
    databaseURL: "https://projectmanagementtool-5528b.firebaseio.com",
    projectId: "projectmanagementtool-5528b",
    storageBucket: "projectmanagementtool-5528b.appspot.com",
    messagingSenderId: "1095775659373"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;