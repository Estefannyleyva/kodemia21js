import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, addDoc, deleteDoc, doc, updateDoc, getDoc, collection, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAV4JGhSR48kqDpIA28vu6rXFXydCy9nFI",
    authDomain: "prueba-6e908.firebaseapp.com",
    projectId: "prueba-6e908",
    storageBucket: "prueba-6e908.appspot.com",
    messagingSenderId: "1069134298323",
    appId: "1:1069134298323:web:3e8c61d87f444a63a2e826",
    measurementId: "G-YJXK6GLJ2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// conexion a firestore
const db = getFirestore();
// funcion qu me ayudara a guardar 
export const saveTaks = (titulo, descripcion) =>{
    const canasta = collection(db, "tasks");
    const objetoAGuardar = {
        title: titulo,
        description: descripcion
    };
    addDoc(canasta, objetoAGuardar);
};
export const getTasks = (callback) => {
    const tasksCollection = collection(db, 'tasks'); // arreglo de bjetos que se encuentranen la base de datos
    onSnapshot(tasksCollection, callback);
};