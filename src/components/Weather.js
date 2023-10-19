import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London"); // Default city

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d68aadfacdd4f5163bc273049a0cf2d`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData(null); // Reset weatherData if there's an error
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {weatherData ? (
        <div>
          <h1>{`Temperature: ${weatherData.main?.temp || "N/A"}`}</h1>
          {/* Add more weather details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
