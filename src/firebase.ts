import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA__fHjqR4zv-h5CmjLV2G_PQBwEi1vSzk",
  authDomain: "tweet-app-3ae69.firebaseapp.com",
  projectId: "tweet-app-3ae69",
  storageBucket: "tweet-app-3ae69.appspot.com",
  messagingSenderId: "699445645028",
  appId: "1:699445645028:web:f0131d32647699437026f1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();