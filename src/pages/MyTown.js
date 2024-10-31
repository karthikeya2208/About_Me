import React, { useEffect, useState } from "react";
import "../styles.css";

const MyTown = () => {
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState("C");
  const [weatherImage, setWeatherImage] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&units=metric&appid=357a27d84beb724dd2912b3e0533aedc"
        );
        const data = await response.json();
        const tempCelsius = data.main.temp;
        setTemperature(tempCelsius);

        if (tempCelsius <= 10) {
          setWeatherImage("cold.png");
        } else if (tempCelsius > 10 && tempCelsius < 20) {
          setWeatherImage("mild.png");
        } else {
          setWeatherImage("sunny.png");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  const handleUnitChange = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const displayTemperature =
    unit === "C"
      ? temperature
      : temperature !== null
      ? (temperature * 9) / 5 + 32
      : null;

  return (
    <div className="container">
      <h1>My Town</h1>
      <p>I live in Halifax, NS.</p>
      <img
        src="/City.png"
        alt="Town"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="weather-info">
        {temperature !== null && (
          <div className="weather-display">
            <img
              src={weatherImage}
              alt="Weather condition"
              className="weather-image"
            />
            <p>
              The current temperature is {displayTemperature.toFixed(1)}°{unit}.
            </p>
          </div>
        )}
        <button onClick={handleUnitChange}>
          Change to °{unit === "C" ? "F" : "C"}
        </button>
      </div>
    </div>
  );
};

export default MyTown;
