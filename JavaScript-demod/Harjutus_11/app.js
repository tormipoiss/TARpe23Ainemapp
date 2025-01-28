// Tormi Laane
// Harjutus 11
// 12.11.2024

//Nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena-loTTa Laas", "Madis meelis-nelis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
function properNames() {
    let fixedNames = []
    for (const name of nimed) {
        const low = name.toLowerCase()
        const splitNames = low.split(' ')
        let fixedName = ""
        for (const currentName of splitNames) {
            if (currentName.includes("-")) {
                const dashNames = currentName.split("-")
                fixedName += dashNames[0].substring(0, 1).toUpperCase() + dashNames[0].substring(1)
                fixedName += "-"
                fixedName += dashNames[1].substring(0, 1).toUpperCase() + dashNames[1].substring(1)
            } else {
                fixedName += currentName.substring(0, 1).toUpperCase() + currentName.substring(1)
            }
            fixedName += " "
        }
        fixedNames.push(fixedName.trimEnd())
    }
    return fixedNames
}

function createEmails(names, domain) {
    names.forEach(name => {
        console.log(name.split(" ").at(-1).toLowerCase() + "@" + domain)
    });
}

function showNames(searchName) {
    let result = []
    const lowerSearch = searchName.toLowerCase()
    for (const nimi of nimed) {
        if (nimi.toLowerCase().includes(lowerSearch)) {
            result.push(nimi)
        }
    }
    console.log(`Leitud nimed, mis sisaldavad ${searchName}:`)

    result.forEach(name => console.log(name))
}

/*
console.log(properNames())
createEmails(properNames(), "tthk.ee")
showNames("ikas")
*/

const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "51104234985" },
    { nimi: "Kadi Kask", isikukood: "39812136789" },
    { nimi: "Tormi Laane", isikukood: "50609082752"}
    ];

function birthDay(people) {
    people.forEach(person => console.log(getBirthDay(person.isikukood)))
}

function getBirthDay(ssid) {
    let year;
    switch (ssid.at(0)) {
        case "1":
        case "2":
            year = 1800
            break
        case "3":
        case "4":
            year = 1900
            break
        case "5":
        case "6":
            year = 2000
            break
        default:
            console.log("Vigane isikukood: esimene number peab olema 1-6")
            break
    }
    year += parseInt(ssid.substring(1, 3))
    const month = parseInt(ssid.substring(3, 5))
    const day = parseInt(ssid.substring(5, 7))
    return new Date(year, month-1, day)
}

//console.log(getBirthDay("50609082752"))
birthDay(inimesteAndmed)

function age(people) {
    people.forEach((person) => {
        console.log(
            "age", 
            new Date().getFullYear() - getBirthDay(person.isikukood).getFullYear());
    })
}

age(inimesteAndmed)

const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
    ];

function longJumpResults(students) {
    students.forEach(student => {
        const best = Math.max(...student.tulemused) // ... võttis väärtused üksikuna välja
        const average = student.tulemused.reduce((sum, num) => sum + num,0) / student.tulemused.length
        console.log(`${student.nimi} Best: ${best} Average: ${average.toFixed(2)}`);
        
    })
}

longJumpResults(opilased)