/*
export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    //`https://api.open-meteo.com/v1/forecast?latitude=45.1787&longitude=5.7148&hourly=temperature_2m`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
*/
import config from "../../config.json";

export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
     //`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`

   //`https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&hourly=temperature_2m,relative_humidity_2m,visibility,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timezone=GMT`

   `https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=sunrise,sunset&timezone=GMT`
   

  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}