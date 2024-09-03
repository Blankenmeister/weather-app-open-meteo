import config from "../../config.json";

export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
   `https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=sunrise,sunset&timezone=auto`
   
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}