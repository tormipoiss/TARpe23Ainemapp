// Tormi Laane
// Harjutus 23 User
// 03.12.2024

import {initializeApp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBO-oad5wqRWbx8isqRb1LUUbhK8xVGLKo",
    authDomain: "harjutus-23.firebaseapp.com",
    projectId: "harjutus-23",
    storageBucket: "harjutus-23.firebasestorage.app",
    messagingSenderId: "262228039191",
    appId: "1:262228039191:web:52bdba8b1b0ce72e4f6e52",
    measurementId: "G-KBB3BRPQCY"
};

initializeApp(firebaseConfig);
const db = getFirestore();

// kogumiku (collection) valimine
const kogumik = collection(db, "tagasiside");

//andmete lisamine
const vorm = document.getElementById('tagasisideVorm');

let lisatudTextCounter = 0;

vorm.addEventListener('submit', e => {
    e.preventDefault();

    const tärn = document.getElementById('tärn').value;
    const kommentaar = document.getElementById('kommentaar').value;

    const lisatud = document.getElementById("lisatud");

    addDoc(kogumik, {
        aeg: new Date(),
        tärn: tärn,
        kommentaar: kommentaar
    })
        .then(() => {
            vorm.reset(); //tühjendame väljad
            lisatud.innerText = "Tagasiside lisatud!"
            lisatud.style.color = "rgb(0, 196, 0)"
            lisatudTextCounter++;
            let currentLisatudTextCounter = lisatudTextCounter;
            setTimeout(() => {
                if (currentLisatudTextCounter == lisatudTextCounter) {
                    lisatud.innerText = ""
                }
            }, 3000);
        })
        .catch(err => {
            console.log(err);
        });
});