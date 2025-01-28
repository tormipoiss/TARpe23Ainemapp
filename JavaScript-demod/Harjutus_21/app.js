// Tormi Laane
// Harjutus 21
// 28.11.2024

const url = "https://dummyjson.com/quotes";

const quotes = async (res) => {
    try{
    const response = await fetch(res);
     // Kontrolli, kas vastuse staatuskood ei ole 200
     if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.quotes)
    kuvaTsitaadid(data.quotes);
    }
    catch(err){
        console.log("Päring ebaõnnestus:" + err);
    }
};

quotes(url)

const kuvaTsitaadid = quotes => {
    const container = document.getElementById('container');

    quotes.forEach(quote => {
        const yksikTsitaat = `
            <div class="card mb-4">
                <div class="card-header">
                    <h5>${quote.author}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">${quote.quote}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">ID: ${quote.id}</small>
                </div>
            </div>
        `;

        container.innerHTML += yksikTsitaat;
    });
}