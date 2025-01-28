// Tormi Laane
// Harjutus 02
// 15.10.2024

//Kellaaeg
let tunnid = "2"
let minutid = "38"
let sekundid = "59"
let ühendatud = `${tunnid}:${minutid}:${sekundid}PM`
console.log(ühendatud);

//Tsitaat lause sees
let tsitaat = '"Suurim õnn on veendumus, et meid armastatakse meie enda pärast, või õigemini, sellest hoolimata." Victor Hugo'
console.log(tsitaat);

//Mallide kasutamine
let eesnimi = "Tormi"
let perenimi = "Laane"
console.log(`${eesnimi} ${perenimi} nimetähed on ${eesnimi.charAt(0)}.${perenimi.charAt(0)}.`)

//Perenime pikkus
let muutuja = "Laane, Tormi"
let index = 5
let muutujapere = muutuja.substring(0, index)
console.log(muutujapere)
console.log(muutujapere.toUpperCase())
console.log(muutujapere.length)

//E-posti aadressi muutmine
let epost = "tormi@giga.com"
console.log(epost.replace(epost.substring(epost.indexOf("@") + 1, epost.indexOf(".")), "gmail"))

//Andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
console.log(`${andmerida.split(",")[3]} ja ${andmerida.split(",")[5]}`)