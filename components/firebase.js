import * as firebase from "firebase";

// Optionally import the services that you want to use

//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBTo3-AIKbqDol174i8IAOEJInq6-M6iG8",
  authDomain: "bike-workshop-e2f5d.firebaseapp.com",
  databaseURL: "https://bike-workshop-e2f5d-default-rtdb.firebaseio.com",
  projectId: "bike-workshop-e2f5d",
  storageBucket: "bike-workshop-e2f5d.appspot.com",
  messagingSenderId: "141196932528",
  appId: "1:141196932528:web:a511fe1e16cdc98638d275",
  measurementId: "G-WW94LJ57EV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
