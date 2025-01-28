// Tormi Laane
// Harjutus 15
// 19.11.2024

const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", (e) => {
    console.log(e.target,"pihtas");
    const button = e.target
    document.body.classList.toggle("dark")
    if (button.classList.contains("btn-dark")) {
        button.classList.replace("btn-dark", "btn-light");
        button.innerText = "Light Theme";
    } else {
        button.classList.replace("btn-light", "btn-dark");
        button.innerText = "Dark Theme";
    }
});