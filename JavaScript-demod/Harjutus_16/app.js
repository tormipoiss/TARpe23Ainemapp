// Tormi Laane
// Harjutus 16
// 21.11.2024

const nimekiri = document.querySelector("#mob")

nimekiri.addEventListener("click", e => {
    const span = e.target.querySelector("span")
    span.classList.toggle("peida")
})