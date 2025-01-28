// Tormi Laane
// Harjutus 03
// 22.10.2024

// Sõidu aeg ja kaugus
function calculateTravelTime() {
    console.log("Sõidu aeg ja kaugus:")
    let kaugus = document.getElementById("kaugus").value
    let kiirus = document.getElementById("kiirus").value
    let aeg = kaugus / kiirus
    let aegMinutites = aeg * 60
    let aegMinutitesRounded = aegMinutites.toFixed(2)
    document.getElementById("travelTimeResult").innerHTML = `${kaugus}km läbimiseks kiirusel ${kiirus}km/h kulub ${aegMinutitesRounded} minutit.`

    console.log(
        `${kaugus}km läbimiseks kiirusel ${kiirus}km/h kulub ${aegMinutitesRounded} minutit.`
    )
    return false;
}

let kaugus = 50
let kiirus = 90
let aeg = kaugus / kiirus
let aegMinutites = aeg * 60
let aegMinutitesRounded = Math.round(aegMinutites)

console.log(
    `${kaugus}km läbimiseks kiirusel ${kiirus}km/h kulub ${aegMinutitesRounded} minutit.`
)

// Postituste kuvamine
function calculatePosts() {
    console.log("Postituste kuvamine:")
    let postitused = document.getElementById("postitused").value
    let maxLehekülg = document.getElementById("maxLehekülg").value
    let postitusteArv = Math.ceil(postitused / maxLehekülg)
    let postitusteArvViimaselLehel = postitused % maxLehekülg
    document.getElementById("postResult").innerHTML = `Postituste kuvamiseks on vaja ${postitusteArv} lehekülge ja viimasel lehel on ${postitusteArvViimaselLehel} postitust.`

    console.log(
        `Postituste kuvamiseks on vaja ${postitusteArv} lehekülge ja viimasel lehel on ${postitusteArvViimaselLehel} postitust.`
    )
    return false;
}

let postitused = 137
let maxLehekülg = 10
let postitusteArv = Math.ceil(postitused / maxLehekülg)
let postitusteArvViimaselLehel = postitused % maxLehekülg

console.log(
    `Postituste kuvamiseks on vaja ${postitusteArv} lehekülge ja viimasel lehel on ${postitusteArvViimaselLehel} postitust.`
)

// Serveri töökulu
function calculateElectricityCost() {
    console.log("Serveri töökulu:")
    let serveriVõimsus = document.getElementById("serveriVõimsus").value
    let elektriHind = document.getElementById("elektriHind").value
    let vooluTarbimine = serveriVõimsus / 1000
    let tööKulu = vooluTarbimine * elektriHind
    let tööKuluRounded = tööKulu.toFixed(2)
    document.getElementById("electricityCostResult").innerHTML = `Serveri töös hoidmine ühe tunni jooksul maksab ${tööKuluRounded} eurot`

    console.log(
        `Serveri töös hoidmine ühe tunni jooksul maksab ${tööKuluRounded} eurot`
    )
    return false;
}

let serveriVõimsus = 400
let elektriHind = 9.69

let vooluTarbimine = serveriVõimsus / 1000
let tööKulu = vooluTarbimine * elektriHind
let tööKuluRounded = tööKulu.toFixed(2)

console.log(
    `Serveri töös hoidmine ühe tunni jooksul maksab ${tööKuluRounded} eurot`
)