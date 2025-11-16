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
  
  const getWeather = (city) => {
    fetchWeather(city);
  }

  return (
    <div className="weather">
      {loading && <p>Loading...</p> }
      <div className="search-bar">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search" />
        <img src={search_icon} onClick={() => getWeather(city)} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">16°C</p>
      <p className="location">Ferizaj</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>60%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
