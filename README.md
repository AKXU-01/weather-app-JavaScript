# 🌤️ Weather App

A responsive weather app built with HTML, CSS and vanilla JavaScript. Search any city to see its current temperature, humidity and wind speed.

## Features
- Search by city name (button click or Enter key)
- Live data from the OpenWeatherMap API
- Weather icon changes with conditions (clear, clouds, rain, drizzle, thunderstorm)
- Responsive layout for mobile, tablet and desktop
- Error handling for empty input, unknown cities, invalid API keys and network issues
- Search icon built with pure CSS

## Tech Stack
HTML5 · CSS3 (Flexbox, clamp(), media queries) · JavaScript (async/await, Fetch API)

## Getting Started
1. Clone the repository
   `git clone https://github.com/<your-username>/<repo-name>.git`
2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
3. Open `script.js` and replace `YOUR_API_KEY` with your key
4. Open `index.html` in your browser (or use VS Code Live Server)

> ⚠️ Never commit your real API key to a public repository.

## What I Learned
- Fetching and handling API data with async/await
- Handling different HTTP error codes (404, 401)
- Updating the DOM dynamically
- Building responsive layouts without a framework
- Debugging my own code

## Future Improvements
- Auto-detect the user's location
- 5-day forecast
- More icons (mist, snow, haze)

## Author
Akshay Kumar
