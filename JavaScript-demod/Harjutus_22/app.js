// Tormi Laane
// Harjutus 22
// 28.11.2024

const themeButton = document.getElementById("theme");
let theme = localStorage.getItem("theme");

if (theme == "dark") 
{
    document.body.classList.add("dark")
    themeButton.classList.replace("btn-dark", "btn-light");
    themeButton.innerText = "Light Theme";
} else {
    document.body.classList.remove("dark")
    themeButton.classList.replace("btn-light", "btn-dark");
    themeButton.innerText = "Dark Theme";
}

themeButton.addEventListener("click", (e) => {
    const button = e.target
    document.body.classList.toggle("dark")
    if (button.classList.contains("btn-dark")) {
        button.classList.replace("btn-dark", "btn-light");
        button.innerText = "Light Theme";
        window.localStorage.setItem('theme', 'dark');
    } else {
        button.classList.replace("btn-light", "btn-dark");
        button.innerText = "Dark Theme";
        window.localStorage.setItem('theme', 'light');
    }
});