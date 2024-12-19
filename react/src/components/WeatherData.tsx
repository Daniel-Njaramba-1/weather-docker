import React from 'react';

interface WeatherDataProps {
  weatherData: {
    city: string;
    temperature: number;
    description: string;
    humidity: number;
    wind_speed: number;
  };
}

const WeatherData: React.FC<WeatherDataProps> = ({ weatherData }) => {
  return (
    <div className="max-w-3xl m-auto p-8 bg-white rounded-3xl shadow-lg text-gray-800">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-4xl font-extrabold mb-2">{weatherData.city}</h2>
        <p className="text-xl text-gray-500 capitalize">{weatherData.description}</p>
      </div>

      <div className="flex justify-center items-center mb-8">
        <div className="text-7xl font-bold text-blue-600">
          {weatherData.temperature.toFixed()}°C
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="text-center p-4 bg-gray-100 rounded-xl">
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">Humidity</h3>
          <p className="text-3xl font-bold">{weatherData.humidity}%</p>
        </div>
        <div className="text-center p-4 bg-gray-100 rounded-xl">
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">Wind Speed</h3>
          <p className="text-3xl font-bold">{weatherData.wind_speed.toFixed()} KPH</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
