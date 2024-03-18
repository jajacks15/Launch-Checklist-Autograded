// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
    // alert("All fields required")

    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden";

    let form = document.querySelector("form");


    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;

        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;

        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);

        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        response.json().then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to  and add that information to your destination.
            let randomPlanet = pickPlanet(planets)

            addDestinationInfo(
                document,
                randomPlanet.name,
                randomPlanet.diameter,
                randomPlanet.star,
                randomPlanet.distance,
                randomPlanet.moons,
                randomPlanet.image
            );
        });

    });

};
