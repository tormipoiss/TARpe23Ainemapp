// Tormi Laane
// Harjutus 13
// 19.11.2024

const cardDivs = document.querySelectorAll(".card")

cardDivs.forEach((card) => {
    const image = card.querySelector(".card-img-top")
    const title = image.getAttribute("data-title")
    const description = image.getAttribute("data-description")
    card.querySelector(".card-title").innerHTML = title
    card.querySelector(".card-text").innerHTML = description
});