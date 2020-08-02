import * as firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyACTt8qgGwJuaMMhiEEhUZbWREvWXnrEFw",
    authDomain: "example-unibe.firebaseapp.com",
    databaseURL: "https://example-unibe.firebaseio.com",
    projectId: "example-unibe",
    storageBucket: "example-unibe.appspot.com",
    messagingSenderId: "58081290594",
    appId: "1:58081290594:web:a92cee9350dec96b0ca43b",
    measurementId: "G-9WK967JLBK"
  };
export default firebase.initializeApp(firebaseConfig);