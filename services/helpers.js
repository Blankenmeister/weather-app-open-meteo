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

export const getDescriptionCode = (code) => {
  const codeDescription = {
    0: { description: "Ciel clair" },
    1: { description: "Généralement clair" },
    2: { description: "partiellement nuageux" },
    3: { description: "Couvert" },
    45: { description: "Brouillard" },
    48: { description: "dépôt de brouillard givrant" },
    51: { description: "Bruine : Intensité légère" },
    53: { description: "Bruine modérée" },
    55: { description: "Bruine dense" },
    56: { description: "Bruine verglaçante : intensité légère" },
    57: { description: "Bruine verglaçante : intensité dense" },
    61: { description: "Pluie : Intensité légère" },
    63: { description: "Pluie : Intensité modérée" },
    65: { description: "Pluie : Intensité forte" },
    66: { description: "Pluie verglaçante : intensité légère" },
    67: { description: "Pluie verglaçante : intensité forte" },
    71: { description: "Chutes de neige : Intensité légère" },
    73: { description: "Chutes de neige : Intensité modérée" },
    75: { description: "Chutes de neige : Intensité forte" },
    77: { description: "Grains de neige" },
    80: { description: "Averses de pluie : légères" },
    81: { description: "Averses de pluie : modérées" },
    82: { description: "Averses de pluie : violentes" }, 
    85: { description: "Averses de neige légères" },
    86: { description: "Averses de neige fortes" },
    95: { description: "Orage : Léger ou modéré" },
    96: { description: "Orage avec grêle légère" },
    99: { description: "Orage avec grêle forte" },
  };

return codeDescription[code];

};

export const getIconNameCode = (code, day = true) => {
  // console.log(day);
  
  const codeIconName = {
    0: { iconName: day ? "01d" : "01n" },
    1: { iconName: day ? "02d" : "02n" },
    2: { iconName: day ? "03d" : "03n" },
    3: { iconName: day ? "04d" : "04n" },
    45: { iconName: day ? "50d" : "50n" },
    48: { iconName: day ? "50d" : "50n" },
    51: { iconName: day ? "09d" : "09n" },
    53: { iconName: day ? "09d" : "09n" },
    55: { iconName: day ? "09d" : "09n" },
    56: { iconName: day ? "09d" : "09n" },
    57: { iconName: day ? "09d" : "09n" },
    61: { iconName: day ? "10d" : "10n" },
    63: { iconName: day ? "10d" : "10n" },
    65: { iconName: day ? "10d" : "10n" },
    66: { iconName: day ? "10d" : "10n" },
    67: { iconName: day ? "10d" : "10n" },
    71: { iconName: day ? "13d" : "13n" },
    73: { iconName: day ? "13d" : "13n" },
    75: { iconName: day ? "13d" : "13n" },
    77: { iconName: day ? "13d" : "13n" },
    80: { iconName: day ? "09d" : "09n" },
    81: { iconName: day ? "09d" : "09n" },
    82: { iconName: day ? "09d" : "09n" },
    85: { iconName: day ? "13d" : "13n" },
    86: { iconName: day ? "13d" : "13n" },
    95: { iconName: day ? "11d" : "11n" },
    96: { iconName: day ? "11d" : "11n" },
    99: { iconName: day ? "11d" : "11n" },
  };

return codeIconName[code];

};
