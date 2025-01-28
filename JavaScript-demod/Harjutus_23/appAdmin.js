// Tormi Laane
// Harjutus 23 Admin
// 03.12.2024

import {initializeApp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

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

const sorteeritudKogumik = query(kogumik, orderBy('aeg', 'desc'));

//andmete lugemine
onSnapshot(sorteeritudKogumik, (snapshot)=>{
    const tagasisideElement = document.getElementById('tagasiside');
    //tühjendame HTML sisu
    tagasisideElement.innerHTML = '';

    const infoCard = document.createElement('div');
    infoCard.className = 'card mb-3';
    let tagasisidesiKokku = 0.0;
    let tärneKokku = 0.0;
    let keskmineTärn = 0.0;
    snapshot.docs.forEach(tagasiside => {
        const data = tagasiside.data();
        tagasisidesiKokku += 1
        tärneKokku += parseFloat(data.tärn);   
    });
    keskmineTärn = (tärneKokku / tagasisidesiKokku).toFixed(2);
    infoCard.innerHTML = `
    <div class="card-header">${tagasisidesiKokku} tagasisidet kokku</div>
    <div class="card-body">
        <p class="card-text">Keskmine tärn: ${keskmineTärn}</p>
    </div>
    `;
    tagasisideElement.appendChild(infoCard);

    snapshot.docs.forEach(dok => {
        const data = dok.data();
        const card = document.createElement('div');
        card.className = 'card mb-3';
        
        card.innerHTML = `
        <div class="card-header">${data.tärn} &#9734;</div>
        <div class="card-body">
            <h5 class="card-title">${new Date(data.aeg.seconds * 1000).toLocaleDateString()}</h5>
            <p class="card-text">${data.kommentaar}</p>

            <a href="#" class="delete-link btn btn-danger" data-id="${dok.id}">Kustuta</a>
        </div>
        `;
        
        tagasisideElement.appendChild(card);
    });
})

//kuular ja kustutamine
document.addEventListener('click', e => {
    // Kontrolli, kas klõpsatud element on kustuta link
    if (e.target.classList.contains('delete-link')) {
        e.preventDefault();
        const id = e.target.dataset.id;
       
        //kinnitus
        const isConfirmed = confirm('Kas olete kindel, et soovite selle dokumendi kustutada?');
        if (isConfirmed) {
            console.log(id);

            //kustutamine
            deleteDoc(doc(db, 'tagasiside', id))
            .then(()=>{
                console.log(`ID ${id} kustutatud`);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
});