import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

// Your web app's Firebase configuration


var firebaseConfig = {
  apiKey: "AIzaSyA1s3xGopeaK_bnj0a8jVKSuaCzqluKT0E",
  authDomain: "keepnotes-c7605.firebaseapp.com",
  databaseURL: "https://keepnotes-c7605-default-rtdb.firebaseio.com",
  projectId: "keepnotes-c7605",
  storageBucket: "keepnotes-c7605.appspot.com",
  messagingSenderId: "986949634148",
  appId: "1:986949634148:web:ce68a5cfa3f17c566c3771",
  measurementId: "G-L6EWW6ZZS9"
};
// Initialize Firebase


const firedb = firebase.initializeApp(firebaseConfig);

export const fire = firedb.database().ref();

export default firedb;