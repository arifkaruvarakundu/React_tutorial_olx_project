import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBWLvjceJ4fJW0RH7QlOhtyFq9wya6dKZQ",
    authDomain: "olx-using-react.firebaseapp.com",
    projectId: "olx-using-react",
    storageBucket: "olx-using-react.appspot.com",
    messagingSenderId: "247917736938",
    appId: "1:247917736938:web:d7743e7a1b0e0664a93893",
    measurementId: "G-3N0BV6V921"
  };

  export default firebase.initializeApp(firebaseConfig)