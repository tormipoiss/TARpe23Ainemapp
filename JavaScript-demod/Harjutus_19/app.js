// Tormi Laane
// Harjutus 19
// 26.11.2024

const container = document.getElementById("products")
const element = container.firstElementChild

const looList = (callback) => {
    const req = new XMLHttpRequest();
    const url = "https://dummyjson.com/products";

    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText);
            callback(null, data.products);
        } else if (req.readyState === 4){
            callback("Probleem andmetega", null);
        }
    });

    req.open("GET", url);
    req.send();
}


looList((err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.forEach((product) => {
            const newElement = element.cloneNode(true)
            newElement.style.display = "block"
            newElement.querySelector(".card-img-top").src = product.thumbnail
            newElement.querySelector(".card-img-top").alt = product.title
            newElement.querySelector(".card-title").innerText = product.title
            newElement.querySelector(".card-text").innerText = product.description
            newElement.querySelector(".btn-primary").innerText = product.price + "€"
            container.appendChild(newElement)
        });
    }
});




/*
// const req = new XMLHttpRequest();
// const url = "https://dummyjson.com/todos";

// req.addEventListener('readystatechange', () => {
//     if (req.readyState === 4 && req.status === 200) {
//         const data = JSON.parse(req.responseText);
//         const unorderedList = document.getElementById("todos");
//         data.todos.forEach(todo => {
//             const listItem = document.createElement("li")
//             listItem.textContent = todo.todo;
//             unorderedList.appendChild(listItem)
//         });
//     } else  if (req.readyState === 4){
//         console.log("Probleem andmetega");
//     }
// });

// req.open("GET", url);
// req.send();

const looList = callback => {
    const req = new XMLHttpRequest();
    const url = "https://dummyjson.com/todos";

    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText);
            const unorderedList = document.getElementById("todos");
            data.todos.forEach(todo => {
                const listItem = document.createElement("li")
                listItem.textContent = todo.todo;
                unorderedList.appendChild(listItem)
            });
                callback(null, data);
        } else  if (req.readyState === 4){
            console.log("Probleem andmetega");
            callback("Probleem andmetega", null);
        }
    });

    req.open("GET", url);
    req.send();
}
console.log("Enne funktsiooni käivitamist")


looList((err, data) =>  {
    if(err){
        console.log("ERROR", err);
    } else {
        console.log("DATA", data);
     }
})

console.log("Pärast funktsiooni käivitamist")
*/