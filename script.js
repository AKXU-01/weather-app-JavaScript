const apiKey = "e92a4ee74ee049317b62744eca4486ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
const searchInput = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather img");
const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temp");
const humidityEl = document.querySelector("#humidity");
const windEl = document.querySelector("#windSpeed");
 
const icons = {
    Clear: "sun.svg",
    Clouds: "cloudy.svg",
    Rain: "raining.svg",
    Drizzle: "raining.svg",
    Thunderstorm: "thunderstorm.svg"
};
 
async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name");
        return;
    }
 
    if (apiKey === "YOUR_API_KEY") {
        alert("Add your OpenWeatherMap API key in script.js");
        return;
    }
 
    try {
        const response = await fetch(
            `${apiUrl}${encodeURIComponent(city)}&appid=${apiKey}`
        );
 
        if (!response.ok) {
            if (response.status === 404) alert("City not found");
            else if (response.status === 401) alert("Invalid or inactive API key");
            else alert("Something went wrong. Please try again.");
            return;
        }
 
        const data = await response.json();
 
        cityEl.textContent = data.name;
        tempEl.textContent = Math.round(data.main.temp) + "°C";
        humidityEl.textContent = data.main.humidity + "%";
        

        windEl.textContent = (data.wind.speed * 3.6).toFixed(1) + " Km/h";
 
        const condition = data.weather[0].main;
        weatherIcon.src = icons[condition] || "cloudy.svg";
        weatherIcon.alt = condition;
    } catch (error) {
        console.error(error);
        alert("Network error. Check your internet connection.");
    }
}
 
searchBtn.addEventListener("click", () => checkWeather(searchInput.value.trim()));
 
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchInput.value.trim());
    }
});