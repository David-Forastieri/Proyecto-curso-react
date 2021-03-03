  import firebase from 'firebase/app';
  import '@firebase/firestore';

  // Your web app's Firebase configuration

  const app = firebase.initializeApp ({
    apiKey: "AIzaSyBBLmbVP8uNvUZQa6wkXaIEYypITbV7IQk",
    authDomain: "proyecto-ecommerce-coderhouse.firebaseapp.com",
    projectId: "proyecto-ecommerce-coderhouse",
    storageBucket: "proyecto-ecommerce-coderhouse.appspot.com",
    messagingSenderId: "480293492041",
    appId: "1:480293492041:web:2343cbbc839e446dc73698"
  });
  
  export const getFirebase = () => {
      return app;
  } 

  export const getFirestore = () => {
      return firebase.firestore(app);
  }