const dragonURL = "https://api.spacexdata.com/v4/dragons";

async function fetchDragonUrl() {
    try {
        const response = await fetch(dragonURL);
        const results = await response.json();
        displayDragonResults(results);
    } catch (error) {
        console.log(error);
    }

}

fetchDragonUrl();

function displayDragonResults(results) {
    console.log(results);

    const dragonContainer = document.querySelector(".dragon-container");
    const currentDragons = document.querySelector(".current-dragons-container");

    let dragonsCurrent = "";

    dragonsCurrent += `<h2> Right now there are ${results.length} Dragons in use by SpaceX</h2>`;

    let html = "";


    let dragonNumber = results.length

    for (let i = 0; i < dragonNumber; i++) {
        html += `<div class="dragon-box">
                    <h3>${results[i].name}</h3>`
        if (results[i].active === true) {
            html += `<h3>Status: Active</h3>`;
        } else {
            html += `<h3>Status: Not active</h3>`;
        }
        html += `<img alt="" src="${results[i].flickr_images[0]}">
                    <p>${results[i].description}</p>                     
        </div>`;
    }

    currentDragons.innerHTML = dragonsCurrent;

    dragonContainer.innerHTML = html;


}