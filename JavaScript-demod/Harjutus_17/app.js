// Tormi Laane
// Harjutus 17
// 21.11.2024

const form = document.querySelector("form")
const vastusekast = document.querySelector('.vastusekast');

form.addEventListener("submit", e => {
    e.preventDefault()
    let eesnimi = firstName.value
    let perekonnanimi = lastName.value
    let e_post = email.value

    vastusekast.innerHTML = `Eesnimi: ${eesnimi} <br> Perekonnanimi: ${perekonnanimi} <br> E-posti aadress: ${e_post} <br>`

    let sugu = document.querySelector('input[name="gender"]:checked');
    
    if (sugu != null) {
        vastusekast.innerHTML += 'Valitud sugu: ' + sugu.value + "<br>";
    }
    
    let linn = city.value

    if(linn != null && linn != "") {
        vastusekast.innerHTML += `Linn: ${linn} <br>`
    }

    let valitudRiik = document.querySelector("#country");
    if (valitudRiik.value != "Vali...") {
        vastusekast.innerHTML += `Sinu valitud riik: ${valitudRiik.value} <br>`;
    }

    let parool = password.value

    vastusekast.innerHTML += `Parool: ${parool}`
})

/* HARJUTAMINE ALLPOOL

const formElement = document.getElementById('myForm');
const vastusekast = document.getElementById('vastusekast');
const nousolek = document.getElementById("accept");
const submitNupp = document.getElementById("submit");
//hobid
const checkboxes = document.getElementsByName("hobbies");

// Keelame nupu vaikimisi
submitNupp.disabled = true;
//Kuular checkboxile ja muudame nupu olekut
nousolek.addEventListener("change",e=>{
    submitNupp.disabled = !nousolek.checked;
});

formElement.addEventListener('submit', e => {
    e.preventDefault();
    let kasutajanimi = username.value;
    let nousolek = accept.checked;

    //massiiv hobide jaoks
    const selectedHobbies = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedHobbies.push(checkbox.value);
        }
    });

    vastusekast.innerHTML = kasutajanimi;

    let suurus = document.querySelector('input[name="size"]:checked');

    if (suurus) {
        vastusekast.innerHTML = 'Valitud suurus: ' + suurus.value;
    } else {
        vastusekast.innerHTML = 'Palun vali suurus!';
    }

    vastusekast.innerHTML += "<br>Hobid:<br>";
    //massiivist hobid
    selectedHobbies.forEach(hobby => {
        vastusekast.innerHTML += `${hobby}<br>`;
    });
});

*/