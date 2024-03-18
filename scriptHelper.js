// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget")

    div.innerHTML = `
    <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json.name}  </li>
                     <li>Diameter: ${json.diameter} </li>
                     <li>Star: ${json.star}</li>
                     <li>Distance from Earth: ${json.distance} </li>
                     <li>Number of Moons: ${json.moons}</li>
                 </ol>
                 <img src="${json.image}"> `;
                 
    
};

function validateInput(testInput) {
    let numberInput = Number(testInput)

    if (testInput === "") {
        return "Empty"
    } else if (isNaN(numberInput)) {
        return "Not a Number"
    } else if (isNaN(numberInput === false)) {
        return "Is a Number"
    };

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus");
    let list = document.getElementById("faultyItems");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === Empty) {
        alert("All fields are required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid input");
    } else {
        if (fuelLevel <= 10000) {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

        } else if (cargoLevel >= 10000) {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

        } else if (cargoLevel >= 10000 && fuelLevel <= 10000) {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
            fuelStatus.innerHTML = "Fuel level too low for launch";;
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch";;
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        };

    };

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

    return response.json();
});

};

function pickPlanet(planets) {
   let planetsReturned = myFetch(planets)
   
    return planetsReturned[Math.ceil((Math.random())*6)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;