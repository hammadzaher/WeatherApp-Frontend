import axios from 'axios';
import { useState } from 'react';
import './App.css'; // <-- Import the new CSS file

const App = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");

  const getWeather = (e) => {
    e.preventDefault();
    axios.get(`https://weather-app-backend-lake.vercel.app/get-weather/${city}`)
      .then((res) => {
        console.log("Response", res.data);
        setWeather(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <form className="weather-form" onSubmit={getWeather}>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
      </div>

      <button type="submit" className="submit-btn">Get Weather</button>

      {weather && (
        <div className="weather-details">
          <h2>Weather Details</h2>
          <ul>
            <li><strong>Country:</strong> {weather?.Country || 'N/A'}</li>
            <li><strong>City:</strong> {weather?.City || 'N/A'}</li>
            <li><strong>Province:</strong> {weather?.Provience || 'N/A'}</li>
            <li><strong>Temperature:</strong> {weather?.Temperatur || 'N/A'}</li>
            <li><strong>Visibility:</strong> {weather?.Visibility || 'N/A'}</li>
            <li><strong>Humidity:</strong> {weather?.Humidity || 'N/A'}</li>
            <li><strong>Feels Like:</strong> {weather?.FeelsLike || 'N/A'}</li>
          </ul>
        </div>
      )}
    </form>
  );
};

export default App;
