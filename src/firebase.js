import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAb2TLTCO1QvtPnmpwcUzTHByEez5v3zgo",
  authDomain: "chat-5ff29.firebaseapp.com",
  projectId: "chat-5ff29",
  storageBucket: "chat-5ff29.appspot.com",
  messagingSenderId: "151182901806",
  appId: "1:151182901806:web:f8c88abb18dac56d1395bf",
  measurementId: "G-6WY97GX2GF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
