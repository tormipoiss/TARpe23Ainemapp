// Tormi Laane
// Harjutus 06
// 05.11.2024

// Positiivne või negatiivne
function polarity() {
    const input = prompt("Sisesta number:")
    let number = parseFloat(input)
    if (isNaN(number)) {
        alert(`Sisestatud väärtus (${input}) ei ole number.`)
        return;
    }

    switch (true) {
        case number > 0:
            alert(`${number} on positiivne`)
            break;
        case number < 0:
            alert(`${number} on negatiivne`)
            break;
        default:
            alert(`${number} on null`)
            break;
    }
}

// Restoran
function restaurant() {
    const input = prompt("Sisesta külastajate arv:")
    const reservationNumber = parseInt(input)
    if (isNaN(reservationNumber) || reservationNumber < 1) {
        alert(`Sisestatud väärtus ${input} ei ole positiivne täisarv.`)
        return
    }

    switch (reservationNumber) {
        case 1:
        case 2:
            alert("Valige laud kahele inimesele.")
            break
        case 3:
        case 4:
            alert("Valige laud neljale inimesele.")
            break
        case 5:
        case 6:
            alert("Valige laud kuuele inimesele.")
            break
        default:
            alert("Valige suur laud.")
            break
    }
}