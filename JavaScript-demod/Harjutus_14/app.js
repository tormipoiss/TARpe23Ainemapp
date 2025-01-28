// Tormi Laane
// Harjutus 14
// 19.11.2024

const items = document.querySelectorAll(".list-group-item")

items.forEach(item => {
    if (item.innerText.startsWith("Ootel:")) {
        item.classList.add("list-group-item-warning")
    }
    else if (item.innerText.startsWith("Tehtud")) {
        item.classList.add("list-group-item-success")
        item.style.fontWeight = 700
    }
    else if (item.innerText.startsWith("Viga")) {
        item.classList.add("list-group-item-danger")
    }
});