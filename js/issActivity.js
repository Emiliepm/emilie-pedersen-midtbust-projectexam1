const issCrewInSpaceURL = "http://api.open-notify.org/astros.json";

async function fetchCrewUrl() {
    try {
        const response = await fetch(issCrewInSpaceURL);
        const results = await response.json();
        displayCrewResults(results);
    } catch (error) {
        console.log(error);
    }

}

fetchCrewUrl();


const issLocationURL = "http://api.open-notify.org/iss-now.json";

async function fetchLocationUrl() {
    try {
        const response = await fetch(issLocationURL);
        const results = await response.json();
        displayLocationResults(results);
    } catch (error) {
        console.log(error);
    }

}

fetchLocationUrl();


function displayCrewResults(results) {
    console.log(results);

    const issCrewContainer = document.querySelector(".iss-people-container");
    const issCounterContainer = document.querySelector(".iss-counter-container");

    let counterHtml = "";

    counterHtml += `<h2>There are currently ${results.number} people on ISS: </h2>`;

    let html = "";

    let crewNumber = results.number

    for (let i = 0; i < crewNumber; i++) {
        html += `<div class="isscrew-box">
                    <h3>${results.people[i].name}</h3>                      
        </div>`;
    }

    issCounterContainer.innerHTML = counterHtml;

    issCrewContainer.innerHTML = html;

}


function displayLocationResults(results) {
    console.log(results);

    const issLocationContainer = document.querySelector(".iss-location-container");
    const issCurrentLocationContainer = document.querySelector(".iss-current-location-container");

    let currentHtml = "";

    currentHtml += `<h2> The Current location of ISS:</h2>`;

    let html = "";


    html += `<div class="location-box">
                    <h3>Latitude: ${results.iss_position.latitude}</h3>
                </div>
                <div class="location-box">
                    <h3>Longitude: ${results.iss_position.longitude}</h3>
        </div>`;

    issCurrentLocationContainer.innerHTML = currentHtml;
    issLocationContainer.innerHTML = html;

}