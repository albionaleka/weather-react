# 🌦️ React Weather App

A simple and responsive **React Weather App** that uses the **OpenWeatherMap API** to display real-time weather information for any city.

---

## 🚀 Features
- Search weather by **city**
- Displays:
  - Temperature (°C)
  - Weather condition (Clear, Clouds, Rain, etc.)
  - Humidity
  - Wind speed
- Error handling for invalid cities
- Clean, responsive UI

---

## 🛠️ Tech Stack
- React (Vite or Create React App)
- OpenWeatherMap API
- Fetch API / Axios
- CSS / Tailwind (optional)

---

# 📦 Installation & Setup (For Classmates)

## 1. Clone or Download the Project
```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
```

## 2. Install Dependencies
```bash
npm install
```

## Get Your OpenWeatherMap API Key

1. Go to https://openweathermap.org/api
2. Sign up or log in
3. Open My API Keys
4. Copy your default key
5. Wait 5–10 minutes for activation

## 4. Create a .env File

In the project root folder, create the file:
```bash
.env
```

Then add the following:

```bash
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

⚠️ Restart dev server after editing .env.

## 5. Start the app

```bash
npm run dev
```

# 🔍 How It Works

Example weather API call:

```bash
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

React fetch example:

```bash
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  return res.json();
};
```

# ❗ Common Issues
- “API key not found”: You forgot VITE_ or REACT_APP_ or you didn’t restart the dev server
- “city not found”: City name misspelled. Use English city names
- Blank screen: Check console (F12 → Console)

# 📁 Project Structure
```bash
src/
│── components/
│   └── WeatherCard.jsx
│── App.jsx
│── index.js
│── styles.css
.env
package.json
```