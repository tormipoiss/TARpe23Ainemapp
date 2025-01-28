// Tormi Laane
// Harjutus 18
// 26.11.2024

const formElement = document.querySelector("form")
const validator = {
    firstName: {
        pattern: /^[a-zA-ZäöüõÄÖÜÕ-]{2,}$/,
        message: "Eesnimi peab olema vähemalt 2 tähemärki!"
    },
    lastName: {
        pattern: /^[a-zA-ZäöüõÄÖÜÕ]{2,}$/,
        message: "Perekonnanimi peab olema vähemalt 2 tähemärki!"
    },
    email: {
        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Vigane e-posti aadress!"
    }
};

for (let field in validator) {
    formElement[field].addEventListener('keyup', e => {
        e.preventDefault();

        let fieldValue = e.target.value;
        let kontroll = validator[field]["pattern"].test(fieldValue);
        let helpText = document.getElementById(field + 'Val');

        if (kontroll) {
            helpText.textContent = "";
            helpText.classList.remove('text-danger');
            helpText.classList.add('text-muted');
        } else {
            helpText.textContent = validator[field]["message"]
            helpText.classList.remove('text-muted');
            helpText.classList.add('text-danger');
        }
    });
}