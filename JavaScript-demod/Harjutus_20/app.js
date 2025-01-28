// Tormi Laane
// Harjutus 20
// 28.11.2024

const container = document.getElementById("products")
const element = container.firstElementChild

const looListPromise = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.addEventListener('readystatechange', () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.responseText);
                const dataObject = url.split("/")[3];
                resolve(data[dataObject])
            } else if (req.readyState === 4) {
                reject("Probleem andmetega");
            }
        });
        req.open("GET", url);
        req.send();
    });
}

looListPromise("https://dummyjson.com/products/category/smartphones")
    .then((data) => {
        addCards(data);
    })
    .catch((err) => {
        console.log(err)
    })
looListPromise("https://dummyjson.com/products/category/laptops")
    .then((data) => {
        addCards(data);
    })
    .catch((err) => {
        console.log(err)
    })
looListPromise("https://dummyjson.com/products/category/tablets")
    .then((data) => {
        addCards(data);
    })
    .catch((err) => {
        console.log(err)
    })

function addCards(data) {
    data.forEach((product) => {
        const newElement = element.cloneNode(true)
        newElement.style.display = "block"
        newElement.querySelector(".card-img-top").src = product.thumbnail
        newElement.querySelector(".card-img-top").alt = product.title
        newElement.querySelector(".card-title").innerText = product.title
        newElement.querySelector(".card-text").innerText = product.description
        newElement.querySelector(".btn-primary").innerText = product.price + "€"
        container.appendChild(newElement)
    })
}