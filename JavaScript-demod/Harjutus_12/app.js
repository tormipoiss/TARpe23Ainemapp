// Tormi Laane
// Harjutus 12
// 14.11.2024

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
            // <li> element
            const ul = document.querySelector(`#ostukorv`);
            ul.innerHTML = "";
            for (let i = 0; i < this.tooted.length; i++) {
                ul.innerHTML += `<li>${i + 1}) Nimi: ${this.tooted[i].nimi} - Hind: ${this.tooted[i].hind} EUR - Kogus: ${this.tooted[i].kogus}</li>`;
            }
        }
    },
    lisaToode (nimi, hind, kogus) {
        this.tooted.push({nimi, hind, kogus})
    },
    koguSumma () {
        let koguSumma = this.tooted.reduce((sum, num) => sum + num.hind * num.kogus, 0)
        // <p> element
        const p = document.querySelector("p");
        p.innerHTML = `Ostukorvi kogusumma: ${koguSumma} €`
        return koguSumma
    }
};

ostukorv.lisaToode("Kana", 10, 1)
ostukorv.kuvaKoguSisu()
console.log(ostukorv.koguSumma())