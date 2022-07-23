import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1R7yeVUyN5S5fYKsA7rTTfRerQITTqv0",
  authDomain: "e-commerce-7dcc7.firebaseapp.com",
  projectId: "e-commerce-7dcc7",
  storageBucket: "e-commerce-7dcc7.appspot.com",
  messagingSenderId: "956089450837",
  appId: "1:956089450837:web:1b4dd8e55f2d694fd9afdc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
