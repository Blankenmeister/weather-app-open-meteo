import {
  localTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime) =>
  unitSystem == "metric"
    ? localTime(currentTime)
    : timeTo12HourFormat(localTime(currentTime));

export const getAMPM = (unitSystem, currentTime) =>
  unitSystem === "imperial"
    ? localTime(currentTime).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date(weatherData.current.time).getUTCDay()];
    
};

export const getWeatherCode = (code, day) => {
  const codeDescription = {
    0: { description: "Ciel clair", iconName: day ? "01d" : "01n" },
    1: { description: "Généralement clair", iconName: day ? "02d" : "02n" },
    2: { description: "partiellement nuageux", iconName: day ? "03d" : "03n" },
    3: { description: "Couvert", iconName: day ? "04d" : "04n" },
    45: { description: "Brouillard", iconName: day ? "50d" : "50n" },
    48: { description: "dépôt de brouillard givrant", iconName: day ? "50d" : "50n" },
    51: { description: "Bruine : Intensité légère", iconName: day ? "09d" : "09n" },
    53: { description: "Bruine modérée", iconName: day ? "09d" : "09n" },
    55: { description: "Bruine dense", iconName: day ? "09d" : "09n" },
    56: { description: "Bruine verglaçante : intensité légère", iconName: day ? "09d" : "09n" },
    57: { description: "Bruine verglaçante : intensité dense", iconName: day ? "09d" : "09n" },
    61: { description: "Pluie : Intensité légère", iconName: day ? "10d" : "10n" },
    63: { description: "Pluie : Intensité modérée", iconName: day ? "10d" : "10n" },
    65: { description: "Pluie : Intensité forte", iconName: day ? "10d" : "10n" },
    66: { description: "Pluie verglaçante : intensité légère", iconName: day ? "10d" : "10n" },
    67: { description: "Pluie verglaçante : intensité forte", iconName: day ? "10d" : "10n" },
    71: { description: "Chutes de neige : Intensité légère", iconName: day ? "13d" : "13n" },
    73: { description: "Chutes de neige : Intensité modérée", iconName: day ? "13d" : "13n" },
    75: { description: "Chutes de neige : Intensité forte", iconName: day ? "13d" : "13n" },
    77: { description: "Grains de neige", iconName: day ? "13d" : "13n" },
    80: { description: "Averses de pluie : légères", iconName: day ? "09d" : "09n" },
    81: { description: "Averses de pluie : modérées", iconName: day ? "09d" : "09n" },
    82: { description: "Averses de pluie : violentes", iconName: day ? "09d" : "09n" },
    85: { description: "Averses de neige légères", iconName: day ? "13d" : "13n" },
    86: { description: "Averses de neige fortes", iconName: day ? "13d" : "13n" },
    95: { description: "Orage : Léger ou modéré", iconName: day ? "11d" : "11n" },
    96: { description: "Orage avec grêle légère", iconName: day ? "11d" : "11n" },
    99: { description: "Orage avec grêle forte", iconName: day ? "11d" : "11n" },
  };

return codeDescription[code];

};
