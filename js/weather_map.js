"use strict";

// For current weather
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPENWEATHER_API_KEY}&units=imperial` +
//     `&units=imperial`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));

const weatherOutput = document.querySelector("#forecast");

// For forecast weather
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPENWEATHER_API_KEY}` +
    `&units=imperial`)
    .then( data => data.json())
    .then( forecast => {
        console.log(forecast);
        forecast.list.forEach(weather => {
            const time = document.createElement("p");
            const temp = document.createElement("p");
            time.innerText = dateFromTimeStamp(weather.dt);
            temp.innerText = weather.main.temp;
            weatherOutput.appendChild(time);
            weatherOutput.appendChild(temp);
        })
    });