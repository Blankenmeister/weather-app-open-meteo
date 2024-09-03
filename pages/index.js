import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";
import  { getDescriptionCode } from "../services/helpers";
import  { getIconNameCode } from "../services/helpers";


import config from "../config.json";
import styles from "../styles/Home.module.css";

export const App = () => {
  const [cityInput, setCityInput] = useState(config.city);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityInput }),
      });
      const data = await res.json();
      setWeatherData({ ...data });
      setCityInput("");
    };
    getData();

    const hourInterval = setInterval(() => {
            getData(); 
          }, 3600000);
      
          return () => clearInterval(hourInterval);
  }, []);


  
  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");


  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={config.city}
        country={config.country}
       
        description={
          getDescriptionCode(weatherData.current.weather_code)
            .description
        }
        iconName={
          getIconNameCode(weatherData.current.weather_code, weatherData)
            .iconName
        }
       
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>

  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
   );
};

export default App;



