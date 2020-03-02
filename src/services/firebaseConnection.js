import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyAuNvrrFSu60_X6i78kL-b6y5jJvjhNIZ4",
    authDomain: "microblog-18c81.firebaseapp.com",
    databaseURL: "https://microblog-18c81.firebaseio.com",
    projectId: "microblog-18c81",
    storageBucket: "microblog-18c81.appspot.com",
    messagingSenderId: "913777182425",
    appId: "1:913777182425:web:910ba75c81f52fefad60c8"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase