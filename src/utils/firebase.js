// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCMGiimBCsgwyMVFey9FgFtN-zlaGcIf4",
  authDomain: "test-project-3d86d.firebaseapp.com",
  projectId: "test-project-3d86d",
  databaseURL: 'https://test-project-3d86d-default-rtdb.firebaseio.com',
  storageBucket: "test-project-3d86d.appspot.com",
  messagingSenderId: "705659867044",
  appId: "1:705659867044:web:778faf530bf6e394a1fb31"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.database(app)
export const gamesRef = db.ref('Games')

