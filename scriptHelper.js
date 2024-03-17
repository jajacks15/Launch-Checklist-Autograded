// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 window.alert("All fields required");

 function validateInput(testInput) {
    window.addEventListener("load", function() {
         let form = document.querySelector("form");
         form.addEventListener("submit", function(event) {
        let pilotName = document.getElementById("pilotName");
        let coPilotName = document.getElementById("copilotName");
        let fuelLevel = document.getElementById("fuelLevel");
        let cargoMass = document.getElementById("cargoMass");

        if (pilotName === "" || pilotName === "" ) {
            alert('Empty');
            event.preventDefault()

        } else if (coPilotNameilotName === "" || coPilotNameilotName === " ") {
            alert('Empty');
            event.preventDefault()

        } else if (isNaN(fuelLevel) === true) {
            alert('Not a Number');
            event.preventDefault()

        } else if (isNaN(cargoMass) === true) {
            alert('Not a Number');
            event.preventDefault()
        }; 
            
         });
    });
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;