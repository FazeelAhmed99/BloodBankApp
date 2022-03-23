import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg3cEmVmEWoVBrnfpmK3tR00_e_BBZQG4",
  databaseURL: "https://bloodbank-5decc-default-rtdb.firebaseio.com",
  authDomain: "bloodbank-5decc.firebaseapp.com",
  projectId: "bloodbank-5decc",
  storageBucket: "bloodbank-5decc.appspot.com",
  messagingSenderId: "728166381226",
  appId: "1:728166381226:web:d87db347fa71bb660d02d3",
};

console.log(firebase.auth);

firebase.initializeApp(firebaseConfig);

export { firebase as default };
