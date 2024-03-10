const apiKey = "2a2ef0d67ebcc112917f7e76ce374ea8";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const displayCity = document.getElementById("city-name");
const displayTemperature = document.getElementById("temperature");
const displayHumidity = document.getElementById("humidity");
const displayWindSpeed = document.getElementById("wind-speed");
const displayWeatherIcon =  document.getElementById("weather-icon");

async function fetchData(){
    const cityName = document.getElementById("search-area").value;
    try{
        const response =   await fetch(`${apiUrl}&q=${cityName}`);
        const data = await response.json();
        if(data.cod !== 200){
            throw new Error("No Data Found");
        }
        else{
            displayCity.textContent = data.name;
            displayTemperature.textContent = Math.floor(data.main.temp) + "°C";
            displayHumidity.textContent = `${data.main.humidity}%`;
            displayWindSpeed.textContent = `${data.wind.speed}km/h`;
        
            const displayWeather = data.weather[0].main.toLowerCase();
            console.log(displayWeather);
            switch(displayWeather){
                case "clouds":
                    displayWeatherIcon.innerHTML = `<i class="fa-solid fa-cloud fa-xl"></i>`;
                    break;
                case "clear":
                    displayWeatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun fa-xl"></i>`;
                    break;
                case "rain":
                    displayWeatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain fa-xl"></i>`;
                    break;
                case "thunderstorm":
                    displayWeatherIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt fa-xl"></i>`;
                    break;
                case "mist":
                    displayWeatherIcon.innerHTML = `<i class="fa-solid fa-water fa-xl"></i>`;
                    break;
                case "snow":
                    displayWeatherIcon.innerHTML = `<i class="fa-solid fa-snowflake fa-xl"></i>`
                    break;
            }
        }
    }
    catch(error){
        displayTemperature.textContent = "°C";
        displayCity.textContent = "Invalid City Name";
        displayHumidity.textContent = "%";
        displayWindSpeed.textContent = "km/h"
        console.error(error);
    }

}
