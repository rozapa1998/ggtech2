// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore"
import{getFirestore, collection,query,where,getDocs} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4a7RIonzu3Vg3ST1cg36rK3ENl0JEsLc",
  authDomain: "proyecto-coder-react.firebaseapp.com",
  projectId: "proyecto-coder-react",
  storageBucket: "proyecto-coder-react.appspot.com",
  messagingSenderId: "272059351759",
  appId: "1:272059351759:web:a7222ab484ff1c52a36dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)