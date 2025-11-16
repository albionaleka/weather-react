import { useState } from "react";
import axios from "axios";
import { AppContext } from "./AppContextDefinition";

export const AppProvider = ({ children }) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const [currentWeather, forecast] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        )
      ]);
      
      setWeatherData(currentWeather.data);
      setForecastData(forecast.data);
    } catch {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ weatherData, forecastData, loading, error, fetchWeather }}>
      {children}
    </AppContext.Provider>
  );
};
