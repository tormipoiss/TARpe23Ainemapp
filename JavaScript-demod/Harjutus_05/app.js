// Tormi Laane
// Harjutus 05
// 22.10.2024

// Temperatuur
function temperature() {
    const temp = prompt("Sisesta temperatuur:")
    if (temp > 25) {
        alert("Väga kuum ilm!")
    }
    else if (temp > 15) {
        alert("Mõnus temperatuur")
    }
    else {
        alert("Jahe ilm")
    }
}

// Kasutajanime kontroll
function checkUser() {
    const user = prompt("Sisesta kasutajanimi:")
    alert((user == "admin") ? "Tere, administraator!" : "Tere, külaline.")
}

//Ürituse piletite hind
function eventPrice() {
    const ticketType = prompt("Sisesta piletitüüp (täispilet / sooduspilet):")
    const age = prompt("Sisesta vanus:")
    if (ticketType == "täispilet") {
        if (age < 18) {
            alert("Hind on 10€")
        }
        else if (age <= 64) {
            alert("Hind on 20€")
        }
        else {
            alert("Hind on 15€")
        }
    }
    else if (ticketType == "sooduspilet") {
        if (age < 18) {
            alert("Hind on 8€")
        }
        else if (age <= 64) {
            alert("Hind on 15€")
        }
        else {
            alert("Hind on 8€")
        }
    }
    else {
        alert("Vale piletitüüp")
    }
}