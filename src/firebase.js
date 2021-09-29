import firebase from "firebase/app";

import "firebase/firestore";

//Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4a7RIonzu3Vg3ST1cg36rK3ENl0JEsLc",
  authDomain: "proyecto-coder-react.firebaseapp.com",
  projectId: "proyecto-coder-react",
  storageBucket: "proyecto-coder-react.appspot.com",
  messagingSenderId: "272059351759",
  appId: "1:272059351759:web:a7222ab484ff1c52a36dba"
};

//Inicializar Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();