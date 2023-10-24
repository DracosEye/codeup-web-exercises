"use strict";

// For current weather
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPENWEATHER_API_KEY}&units=imperial` +
//     `&units=imperial`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));

const weatherOutput = document.querySelector("#forecast");
let curDayForecasts = [];
let descriptions, icons, humidities, windSpeeds, windDirs, pressures;
let starting_lat = 29.426825118534886;
let starting_long = -98.48948239256946;

// For forecast weather
function updateForecast(weather_lat, weather_long) {
    // Get rid of forecasts for previous location
    while (weatherOutput.firstChild) {
        weatherOutput.removeChild(weatherOutput.firstChild);
    }

    // Get updated forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${weather_lat}&lon=${weather_long}` +
        `&appid=${OPENWEATHER_API_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            forecast.list.forEach((weather, index) => {
                curDayForecasts.push(weather);
                // Summarize weather for current day if on the last forecast of the day
                if (index === forecast.list.length - 1 || dateFromTimeStamp(weather.dt) !== dateFromTimeStamp(forecast.list[index + 1].dt)) {
                    const forecastContainer = document.createElement("div");
                    // forecastContainer.classList.add("border", "border-dark-subtle", "rounded", "p-2", "d-flex", "flex-column", "align-items-center");
                    const day = document.createElement("p");
                    day.classList.add("fw-bold", "fs-4", "align-self-center");
                    const time = document.createElement("p");
                    const temp = document.createElement("p");
                    const desc = document.createElement("p");
                    const icon = document.createElement("img");
                    const humid = document.createElement("p");
                    const wind = document.createElement("p");
                    const pressure = document.createElement("p");
                    day.innerText = dayOfWeekFromDayAbbreviated(weather.dt);
                    time.innerText = dateFromTimeStamp(weather.dt);
                    temp.innerText = getTempString(curDayForecasts);
                    descriptions = [];
                    icons = [];
                    humidities = [];
                    windSpeeds = [];
                    windDirs = [];
                    pressures = [];
                    for (let cast of curDayForecasts) {
                        descriptions.push(cast.weather[0].description);
                        icons.push(cast.weather[0].icon);
                        humidities.push(cast.main.humidity);
                        windSpeeds.push(cast.wind.speed);
                        windDirs.push(cast.wind.deg);
                        pressures.push(cast.main.pressure);
                    }
                    desc.innerText = mostFrequent(descriptions);
                    icon.srcset = `http://openweathermap.org/img/w/${mostFrequent(icons)}.png`;
                    humid.innerText = "Humidity: " + average(humidities);
                    wind.innerText = "Wind: " + average(windSpeeds) + " mph " + windCardinalDirection(average(windDirs));
                    pressure.innerText = "Pressure: " + average(pressures) + " mb";
                    forecastContainer.appendChild(day);
                    forecastContainer.appendChild(time);
                    forecastContainer.appendChild(desc);
                    forecastContainer.appendChild(icon);
                    forecastContainer.appendChild(temp);
                    forecastContainer.appendChild(wind);
                    forecastContainer.appendChild(humid);
                    forecastContainer.appendChild(pressure);
                    forecastContainer.classList.add("forecast-container", "border", "border-dark-subtle", "rounded", "p-2", "d-flex", "flex-column", "align-items-center");
                    weatherOutput.appendChild(forecastContainer);
                    curDayForecasts = [];
                }
            });
        });
}

function updateMap(newPos) {
    map.setCenter(newPos);
    updateForecast(newPos.lat, newPos.lng);
    reverseGeocode(newPos, MAPBOX_API_KEY)
        .then(results => {
            textField.value = results;
        });
}

// Get initial forecast
updateForecast(starting_lat, starting_long);

// Actions for updated city in text field
const textField = document.querySelector("#forecast-city");
const forecastButton = document.querySelector("#forecast-btn");

forecastButton.addEventListener("click", () => {
    geocode(textField.value, MAPBOX_API_KEY)
        .then(results => {
            map.setCenter(results);
            marker.setLngLat([results[0], results[1]]);
            updateForecast(results[1], results[0]);
        });
});

// Display map
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    zoom: 10, // starting zoom
    center: [starting_long, starting_lat]
});

// Place draggable marker on starting city
const marker = new mapboxgl.Marker({
    draggable: true
}).setLngLat([starting_long, starting_lat])
    .addTo(map);

map.on("dblclick", e => {
    marker.setLngLat(e.lngLat);
    updateMap(e.lngLat);
});

// Update forecast after marker is dragged
marker.on("dragend", () => {
    updateMap(marker.getLngLat());
});