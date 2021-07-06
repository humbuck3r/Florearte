import firebase from 'firebase'



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseApp = firebase.initializeApp(  {
    apiKey: "AIzaSyCNFWiE7g4Or_AF7P2YVgnAs1E13rkqnXo",
    authDomain: "florearte-44b46.firebaseapp.com",
    databaseURL: "https://florearte-44b46-default-rtdb.firebaseio.com",
    projectId: "florearte-44b46",
    storageBucket: "florearte-44b46.appspot.com",
    messagingSenderId: "668577090955",
    appId: "1:668577090955:web:42e60d425d7f8bb1c6b38e",
    measurementId: "G-1W9DPKVVE0"

  });
  // Initialize Firebase
  const db = firebaseApp.firestore();


  export {db};
