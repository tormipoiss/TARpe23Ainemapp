// Tormi Laane
// Harjutus 10
// 12.11.2024

//Toote objekt
const toode = {
    nimetus: "Piim",
    hind: 0.6,
    kogus: 2,

    koguHind() {
        return this.hind * this.kogus
    },
    lisa(kogus) {
        this.kogus += kogus
    },
    kuva() {
        return `${this.kogus} ${this.nimetus} hinnaga ${this.hind}€`
    }
}
console.log(`${toode.kogus} ${toode.nimetus} hinnaga ${toode.hind}€`)
toode.lisa(5)
console.log(toode.koguHind())
console.log(toode.kuva())

//Ostukorv
const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
    ],
    kuvaKoguSisu () {
        for (let i = 0; i < this.tooted.length; i++)
        {
            console.log(`${i + 1}) Nimi: ${this.tooted[i].nimi} - Hind: ${this.tooted[i].hind} EUR - Kogus: ${this.tooted[i].kogus}`)
        }
    },
    lisaToode (nimi, hind, kogus) {
        this.tooted.push({nimi, hind, kogus})
    },
    koguSumma () {
        return this.tooted.reduce((sum, num) => sum + num.hind * num.kogus, 0)
    }
};

ostukorv.lisaToode("Kana", 10, 1)
ostukorv.kuvaKoguSisu()
console.log(ostukorv.koguSumma())