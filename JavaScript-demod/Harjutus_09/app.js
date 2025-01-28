// Tormi Laane
// Harjutus 09
// 07.11.2024

// Erinevad funktsioonid
function getName1(name) {
    document.write(name + "<br>")
}

const getName2 = (name) => {
    document.write(name + "<br>")
}

//Argumendiga funktsioon
function kuupaevEesti(kuupäevString) {
    console.log(kuupäevString)
    let kuupäev = new Date(`20${kuupäevString.substring(6, 8)}`,
    `${parseInt(kuupäevString.substring(3, 5))-1}`,
    `${kuupäevString.substring(0, 2)}`)
    console.log(kuupäev)
    document.write(`Päev: ${kuupäevString.substring(0, 2)}
    (${findDayOfWeek(kuupäev.getDay())}), 
    kuu: ${findMonth(kuupäevString.substring(3, 5))}`)
}

function findDayOfWeek (dayNumber) {
    switch (dayNumber) {
        case 0:
            return "pühapäev"
        case 1:
            return "esmaspäev"
        case 2:
            return "teisipäev"
        case 3:
            return "kolmapäev"
        case 4:
            return "neljapäev"
        case 5:
            return "reede"
        case 6:
            return "laupäev"
    }
}

function findMonth (monthNumber) {
    switch (monthNumber) {
        case "01":
            return "jaanuar"
        case "02":
            return "veebruar"
        case "03":
            return "märts"
        case "04":
            return "aprill"
        case "05":
            return "mai"
        case "06":
            return "juuni"
        case "07":
            return "juuli"
        case "08":
            return "august"
        case "09":
            return "september"
        case "10":
            return "oktoober"
        case "11":
            return "november"
        case "12":
            return "detsember"
    }
}

//Teadmata hulk
function calculateNumber() {
    let numbers = (document.getElementById("numbers").value).split(" ")
    let numbersSum = 0
    for (let i = 0; i < numbers.length; i++) {
        numbersSum += parseFloat(numbers[i])
    }
    let numbersAvg = 0
    if (numbers.length != 0) {
        numbersAvg = numbersSum / numbers.length
    }
    document.getElementById("numbersResult").innerHTML = `
    The sum of all numbers is: ${numbersSum}<br />
    The average of all numbers is: ${numbersAvg}`
    return false
}

//Salajane sõnum
const salajaneSonum = () => {
    let message = document.getElementById("message").value
    let char = ''
    let secretMessage = ""
    for (let i = 0; i < message.length; i++) {
        char = message[i]
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
        char == 'õ' || char == 'ä' || char == 'ö' || char == 'ü')
        {
            secretMessage += '*'
        }
        else
        {
            secretMessage += message[i]
        }
    }
    document.getElementById("secretMessage").innerHTML = secretMessage
    return false
}

//Unikaalsed nimed
const leiaUnikaalsedNimed = (names) => {
    let uniqueNames = []
    let addName = true
    for (let i = 0; i < names.length; i++) 
    {
        addName = true
        for (let j = 0; j < uniqueNames.length; j++) 
        {
            if (uniqueNames[j] == names[i]) {
                addName = false 
                console.log("true")
            }
        }
        if (addName == true)
        uniqueNames.push(names[i])
    }
    document.write("Unikaalsed nimed on: ")
    for (let i = 0; i < uniqueNames.length; i++)
    {
        document.write(` ${uniqueNames[i]},`)
    }
}