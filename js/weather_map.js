"use strict";

// For current weather
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPENWEATHER_API_KEY}&units=imperial` +
//     `&units=imperial`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));

const weatherOutput = document.querySelector("#forecast");
let curDay, prevDay, curTime, prevWeekday, prevDate;
let dayCount = 0;
let min_temps = [];
let max_temps = [];
let descriptions = [];
let icons = [];
let wind_speeds = [];
let wind_directions = [];
let humidities = [];
let pressures = [];

function purgeArrays() {
    min_temps = [];
    max_temps = [];
    descriptions = [];
    icons = [];
    wind_speeds = [];
    wind_directions = [];
    humidities = [];
    pressures = [];
}

// For forecast weather
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPENWEATHER_API_KEY}` +
    `&units=imperial`)
    .then (data => data.json())
    .then (forecast => {
        console.log(forecast);
        forecast.list.forEach((weather, index) => {
            // const day = document.createElement("p");
            // const time = document.createElement("p");
            // const temp = document.createElement("p");
            // const desc = document.createElement("p");
            // const icon = document.createElement("img");
            // const humid = document.createElement("p");
            // const wind = document.createElement("p");
            // const pressure = document.createElement("p");
            // day.innerText = dayOfWeekFromDayAbbreviated(weather.dt);
            // time.innerText = dateFromTimeStamp(weather.dt);

            curTime = dateFromTimeStamp(weather.dt);
            curDay = parseInt(curTime.slice(8,10));

            // Set starting point
            if (index === 0) {
                prevDay = curDay;
            }

            // If starting a new day, process and display the information for the previous day
            // and purge the arrays
            if (curDay !== prevDay) {
                const day = document.createElement("p");
                const time = document.createElement("p");
                const temp = document.createElement("p");
                const desc = document.createElement("p");
                const icon = document.createElement("img");
                const humid = document.createElement("p");
                const wind = document.createElement("p");
                const pressure = document.createElement("p");

                day.innerText = prevWeekday;
                temp.innerText = "Temperature: " + average(min_temps) + " / " + average(max_temps);

                purgeArrays();
                dayCount++;
            }

            // Process info if five days not forecast yet
            if (dayCount < 5) {
                // temp.innerText = "Temperature: " + weather.main.temp_min + " / " + weather.main.temp_max;
                // desc.innerText = weather.weather[0].description;
                // icon.srcset = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
                // humid.innerText = "Humidity: " + weather.main.humidity;
                // wind.innerText = "Wind: " + weather.wind.speed + " mph " + windCardinalDirection(weather.wind.deg);
                // pressure.innerText = "Pressure: " + weather.main.pressure + " mb";
                // weatherOutput.appendChild(day);
                // weatherOutput.appendChild(time);
                // weatherOutput.appendChild(temp);
                // weatherOutput.appendChild(desc);
                // weatherOutput.appendChild(icon);
                // weatherOutput.appendChild(wind);
                // weatherOutput.appendChild(humid);
                // weatherOutput.appendChild(pressure);
                // weatherOutput.appendChild(document.createElement("hr"));

                // Store info in separate arrays
                min_temps.push(weather.main.temp_min);
                max_temps.push(weather.main.temp_max);
                descriptions.push(weather.weather[0].description);
                icons.push(weather.weather[0].icon);
                humidities.push(weather.main.humidity);
                wind_speeds.push(weather.wind.speed);
                wind_directions.push(weather.wind.deg);
                pressures.push(weather.main.pressure);
            }
            prevDay = curDay;
            prevDate = dateFromTimeStamp(weather.dt);
            prevWeekday = dayOfWeekFromDayAbbreviated(weather.dt);
        });
    });