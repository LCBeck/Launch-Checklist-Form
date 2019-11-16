// Write your JavaScript code here!
window.addEventListener("load", function (){
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
    
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" 
      || cargoMass.value === "") {
         alert ("All fields are required!");
         event.preventDefault();
      
      } else {
      if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
         alert ("Please provide a ## for Cargo Mass and Fuel Level");
         event.preventDefault();
      }

      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert ("Please provide text for Pilot and Co-Pilot names");
         event.preventDefault();
      }
      let launchStatus = document.getElementById('launchStatus')
      let faultyItems = document.getElementById('faultyItems')
      let pilotStatus = document.getElementById(`${pilotName}`)
      let copilotStatus = document.getElementById(`${copilotName}`)
      let fuelStatus = document.getElementById('fuelStatus')
      let cargoStatus = document.getElementById('cargoStatus')
     
      if (fuelLevel.value === 890) {
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"; 
         event.preventDefault();
      }
      
      if (cargoMass.value === 0) {
         launchStatus.innerHTML = "All fields required"
         launchStatus.style.color = "red";
         event.preventDefault();
      }

      if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         cargoStatus.innerHTML = "There is enough mass for the shuttle to take off.";
         fuelStatus.innerHTML = "There is enough fuel for the journey."
         launchStatus.style.color = "green";
      }
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey."
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
             } 
 
         if (cargoMass.value > 10000) {
            faultyItems.visibility = "visible";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red";
              }
   }
})

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
  
   const div = document.getElementById("missionTarget");
   div.innerHTML =
   `<h2>Mission Destination</h2>
   <ol>
   <li>Name: ${json[1].name}</li>
     <li>Diameter: ${json[1].diameter} </li>
     <li>Star: ${json[1].star}</li>
     <li>Distance from Earth: ${json[1].distance}</li>
    <li>Number of Moons: ${json[1].moons}</li>
   </ol>
   <img src="${json[1].image}">`;
}) 
});
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
