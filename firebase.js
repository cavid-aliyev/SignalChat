import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHNoJz7ojc0T-6OiNz1mNJHblVR_x9JUY",
  authDomain: "signal-chat-7c38a.firebaseapp.com",
  projectId: "signal-chat-7c38a",
  storageBucket: "signal-chat-7c38a.appspot.com",
  messagingSenderId: "683866199647",
  appId: "1:683866199647:web:8b80e4a7efa301b91fadea",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();

export {db, auth}
