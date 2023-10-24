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

// For forecast weather
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPENWEATHER_API_KEY}` +
    `&units=imperial`)
    .then (data => data.json())
    .then (forecast => {
        console.log(forecast);
        forecast.list.forEach((weather, index) => {
            curDayForecasts.push(weather);
            if (index === forecast.list.length - 1 || dateFromTimeStamp(weather.dt) !== dateFromTimeStamp(forecast.list[index+1].dt)) {
                const forecastContainer = document.createElement("div");
                const day = document.createElement("p");
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
                forecastContainer.appendChild(temp);
                forecastContainer.appendChild(desc);
                forecastContainer.appendChild(icon);
                forecastContainer.appendChild(wind);
                forecastContainer.appendChild(humid);
                forecastContainer.appendChild(pressure);
                forecastContainer.classList.add("forecast-container");
                weatherOutput.appendChild(forecastContainer);
                curDayForecasts = [];
            }

            // curTime = dateFromTimeStamp(weather.dt);
            // curDay = parseInt(curTime.slice(8,10));

            // Set starting point
            // if (index === 0) {
            //     prevDay = curDay;
            // }

            // If starting a new day, process and display the information for the previous day
            // and purge the arrays
            // if (curDay !== prevDay) {
                // const day = document.createElement("p");
                // const time = document.createElement("p");
                // const temp = document.createElement("p");
                // const desc = document.createElement("p");
                // const icon = document.createElement("img");
                // const humid = document.createElement("p");
                // const wind = document.createElement("p");
                // const pressure = document.createElement("p");

                // day.innerText = prevWeekday;
                // temp.innerText = "Temperature: " + average(min_temps) + " / " + average(max_temps);

                // purgeArrays();
                // dayCount++;
            // }

            // Process info if five days not forecast yet

                // Store info in separate arrays
                // min_temps.push(weather.main.temp_min);
                // max_temps.push(weather.main.temp_max);
                // descriptions.push(weather.weather[0].description);
                // icons.push(weather.weather[0].icon);
                // humidities.push(weather.main.humidity);
                // wind_speeds.push(weather.wind.speed);
                // wind_directions.push(weather.wind.deg);
                // pressures.push(weather.main.pressure);
            // prevDay = curDay;
            // prevDate = dateFromTimeStamp(weather.dt);
            // prevWeekday = dayOfWeekFromDayAbbreviated(weather.dt);
        });
    });