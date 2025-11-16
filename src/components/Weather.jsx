import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextDefinition";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import "./Weather.css";

const Weather = () => {
  const { weatherData, loading, fetchWeather } = useContext(AppContext);
  const [city, setCity] = useState("");

  const getWeather = () => {
    if (city.trim() === "") return;
    fetchWeather(city);
  };

  return (
    <div className="weather">
      {loading && <p>Loading...</p>}

      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search"
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
        <img src={search_icon} onClick={getWeather} alt="Search" />
      </div>

      {!weatherData && !loading && (
        <p style={{ marginTop: "20px" }}>
          Search for a city to see the weather.
        </p>
      )}

      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />

          <p className="temperature">{Math.round(weatherData?.main?.temp)}°C</p>

          <p className="location">
            {weatherData?.name}, {weatherData?.sys?.country}
          </p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData?.main?.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{Math.round((weatherData?.wind?.speed || 0) * 3.6)} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
