import firebase from 'firebase';
// Your web app's Firebase configuration



var firebaseConfig = {
    apiKey: "AIzaSyC92oRuTJpiG0LvxqClwuJUzNG5lEx00fQ",
    authDomain: "login-d7375.firebaseapp.com",
    projectId: "login-d7375",
    storageBucket: "login-d7375.appspot.com",
    messagingSenderId: "388304060443",
    appId: "1:388304060443:web:e21791b6cbbc89a5c038be",
};
  // Initialize Firebase


const fire = firebase.initializeApp(firebaseConfig);

export default fire;