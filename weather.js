function updatedWeatherTemp(response) {
    let temperature = Math.round(response.data.temperature.current)
    let city = response.data.city;
    let country = response.data.country;
    let description = response.data.condition.description;
    
    let temperatureValue = document.querySelector(".value");
    temperatureValue.innerHTML = temperature;

   
}

function change(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-input")
    let cityElement = document.querySelector("#current-city")
    let city = inputElement.value;


    let apiKey = "3f65ad3b04d2e02o62f45a90b350td63";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiUrl)
    axios.get(apiUrl).then(updatedWeatherTemp);
    cityElement.innerHTML = city;

    
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    
    
if (minutes < 10) {
    minutes = `0${minutes}`
    }
    
if (hours < 10) {
    hours = `0${hours}`
}
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let formattedDay = days[day];
    return`${formattedDay} ${hours}:${minutes}`
}





let searchForm = document.querySelector("#weather-form")
searchForm.addEventListener("submit", change)

let currentDateElement = document.querySelector("#current-date")

let currentDate = new Date

currentDateElement.innerHTML = formatDate(currentDate)