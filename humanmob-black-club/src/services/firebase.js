// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZXbnJ1kBwrlR1wmHOAeKMD3JnN8o4A3g",
  authDomain: "humanmobblackclub.firebaseapp.com",
  projectId: "humanmobblackclub",
  storageBucket: "humanmobblackclub.appspot.com", // corregido
  messagingSenderId: "622366925285",
  appId: "1:622366925285:web:55c27bd1ac75e5c4f3cf0c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
