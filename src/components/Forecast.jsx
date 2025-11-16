import { useContext } from "react";
import { AppContext } from "../context/AppContextDefinition";
import "./Forecast.css";

const Forecast = () => {
  const { forecastData } = useContext(AppContext);

  if (!forecastData) return null;

  const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const getDayName = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-item">
            <p className="forecast-day">{getDayName(day.dt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="forecast-icon"
            />
            <p className="forecast-temp">{Math.round(day.main.temp)}°C</p>
            <p className="forecast-desc">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
