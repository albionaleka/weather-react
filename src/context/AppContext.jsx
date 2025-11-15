import { useState } from "react";
import axios from "axios";
import { AppContext } from "./AppContextDefinition";

export const AppProvider = ({ children }) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    
  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ weatherData, loading, error, fetchWeather }}>
      {children}
    </AppContext.Provider>
  );
};