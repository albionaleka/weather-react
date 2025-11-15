import { useEffect, useContext } from 'react'
import { AppContext } from './context/AppContextDefinition';
import './App.css'

function App() {
  const { weatherData, loading, error, fetchWeather } = useContext(AppContext);
  useEffect(() => {
    fetchWeather('Ferizaj');
  }, []);

  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Condition: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
