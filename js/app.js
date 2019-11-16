//Local storage class
const storage = new Storage();


const weatherLocation = storage.getLocation();

//Get the the first letter of name var

const name = String(weatherLocation.name);

const nameL = name.charAt(0);

//Set name
document.querySelector(".user").innerHTML = nameL;

//Init weather class
const weather = new Weather(weatherLocation.city);

//Set current settings value
const nameS = document.getElementById("name");
//set the current storage value to placeholder
nameS.setAttribute("placeholder", weatherLocation.name);

const locationS = document.getElementById("location");
//set the current storage value to placeholder
locationS.setAttribute("placeholder", "eg(" + weatherLocation.city + ")");

//Init the ui class
const ui = new UI();

//This event waits untill the page finish loading
document.addEventListener("DOMContentLoaded", getWeather);

const button = document.querySelector(".settings__save");

button.addEventListener("click", (e) => {

    const name = document.getElementById("name").value;

    const location = document.getElementById("location").value;

    //Change Loaction 
    weather.changeLocation(location);

    //change it in local storage
    storage.setLocation(location, name);

    getWeather();

    //Alert
    if (confirm("are you sure you want to change location?")) {
        //Show an alert
        document.querySelector(".user").innerHTML = `<h4 style="font-size:1.4rem">settings saved</h4>`;
    }

    e.preventDefault();
});


function getWeather() {
    weather.getWeather()
        .then((result) => {
            ui.paint(result);
        })
        .catch((err) => err);
}