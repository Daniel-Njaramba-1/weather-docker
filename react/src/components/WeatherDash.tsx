import React, { useState } from 'react';
import axios from 'axios';
import WeatherData from './WeatherData';

interface WeatherDataType {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  wind_speed: number;
}

const WeatherDash = () => {
  const [data, setData] = useState<WeatherDataType | null>(null);
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  const url = `http://localhost:5000/weather?city=${location}`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          setError("");
        })
        .catch((error) => {
          setError("Location not found");
          console.error("API Error:", error);
        });
      setLocation("");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-300 to-blue-700 flex flex-col">
      {/* Header */}
      <header className="text-white p-6 text-4xl font-extrabold text-center">
        <h1>Weather Dashboard</h1>
      </header>

      {/* Search Bar */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Enter a city name"
            className="py-3 px-6 w-full text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
          />
          {error && <p className="text-center text-red-500 mt-3">{error}</p>}
        </div>
      </div>

      {/* Weather Results */}
      {data && (
        <div className="flex-1  p-6">
          <WeatherData weatherData={data} />
        </div>
      )}
    </div>
  );
};

export default WeatherDash;
