const crewURL = "https://api.spacexdata.com/v4/crew";

async function fetchCrewUrl() {
    try {
        const response = await fetch(crewURL);
        const results = await response.json();
        displayCrewResults(results);
    } catch (error) {
        console.log(error);
    }

}

fetchCrewUrl();

function displayCrewResults(results) {
    console.log(results);

    const crewNumberContainer = document.querySelector(".crew-number-container");

    let numberHtml = "";

    numberHtml += `<h2> Current Crew Members in use by SpaceX: ${results.length} </h2>`

    crewNumberContainer.innerHTML = numberHtml;

    const crewContainer = document.querySelector(".crew-container");

    let html = "";



    let crewNumber = results.length

    for (let i = 0; i < crewNumber; i++) {
        html += `<div class="crew-box">
                    <img alt="" src="${results[i].image}">
                    <div class ="crew-top-left-text">
                    <p>${results[i].name}</p>
                    <p>Status: ${results[i].status}</p>
                    </div>
                    <a href="${results[i].wikipedia}">Learn more</a>          
        </div>`;
    }

    crewContainer.innerHTML = html;

}