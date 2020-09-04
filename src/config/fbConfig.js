import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBEU8sLdfXvd_X2YUOJd6Eeo4c_YTEIAmE",
    authDomain: "react-redux-firebase-e7445.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-e7445.firebaseio.com",
    projectId: "react-redux-firebase-e7445",
    storageBucket: "react-redux-firebase-e7445.appspot.com",
    messagingSenderId: "787815211079",
    appId: "1:787815211079:web:dbb56e3a8831ea863f1162",
    measurementId: "G-J7LK0RR91R"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;