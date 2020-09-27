const spaceXNextLaunchUrl ="https://api.spacexdata.com/v4/launches/next";

async function fetchNextUrl(){
    try{
        const response = await fetch(spaceXNextLaunchUrl); 
        const results = await response.json();
        displayNextLaunchResults(results);
    } catch(error){
        console.log(error);
    }

}

fetchNextUrl();

const spaceXUpcomingLaunchUrl ="https://api.spacexdata.com/v4/launches/upcoming";

async function fetchUpcomingUrl(){
    try{
        const response = await fetch(spaceXUpcomingLaunchUrl); 
        const results = await response.json();
        displayUpcomingLaunchResults(results);
    } catch(error){
        console.log(error);
    }

}

fetchUpcomingUrl();

function displayNextLaunchResults(results){
    console.log(results);

    const spaceXNextLaunchContainer = document.querySelector(".next-launch-container");

    let html = "";

    html += `<h2> Next spaceX Launch: </h2>`

        html += `<div class="next-box">
                    <h3>Date (UTC time): ${results.date_utc}</h3>
                    <h3>Name : ${results.name}</h3>
                    <img alt="" src="${results.links.patch.small}">
                    <p>Details: ${results.details}</p>

        </div>`;

        //spaceXNextLaunchContainer.innerHTML = html;

}

function displayUpcomingLaunchResults(results){
    console.log(results);

    const spaceXUpcomingLaunchContainer = document.querySelector(".upcoming-launch-container");

    let html = "";

        for (let i = 0; i < 4; i++) {
            let details = results[i].details;
            let picture = results[i].links.patch.small;

            html += `<div class="launch-box">
                    <h3>Date (UTC time): ${results[i].date_utc}</h3>
                    <h3>Name : ${results[i].name}</h3>
                    `;
        if (picture === null){
            html += `<p>No picture yet.</p>`;
        } else {
            html += `<img alt="" src="${results[i].links.patch.small}">`;
        }
        if (details === null){
            html += `<p>No details yet.</p></div>`;
        } else {
            html += `<p>${results[i].details}</p></div>`;
        }
    }

        spaceXUpcomingLaunchContainer.innerHTML = html;

}


