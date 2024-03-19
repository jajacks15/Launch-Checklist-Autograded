// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget")

    div.innerHTML = `
    <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}  </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}"> `;
};

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    };

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid input");
    } else {
        list.style.visibility = "visible";
        launchStatus.style.color = "green";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000 || cargoLevel > 10000) {


            launchStatus.textContent = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

            if (fuelLevel < 10000) {
                document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
            } else {
                document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
            }

            if (cargoLevel > 10000) {
                // document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
                document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
            } else {
                document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
            }

            if (cargoLevel < 10000 && fuelLevel > 10000) {

                document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
            }
        }

        else {

            // faultyItems.style.visibility = "hidden"; 
            launchStatus.textContent = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
            document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
        }
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()

    });

    return planetsReturned;
};

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)

    return planets[index]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;