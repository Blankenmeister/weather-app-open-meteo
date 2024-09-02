
/*
import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
  const [cityInput, setCityInput] = useState("London");
  const [triggerFetch, setTriggerFetch] = useState(true);
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
  }, [triggerFetch]);

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={weatherData.name}
        country={weatherData.sys.country}
        description={weatherData.weather[0].description}
        iconName={weatherData.weather[0].icon}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
          <Search
            placeHolder="Search a city..."
            value={cityInput}
            onFocus={(e) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.target.placeholder = "Search a city...";
            }}
          />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
      <Search
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
*/


import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
// import { Search } from "../components/Search";
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
  // const [triggerFetch, setTriggerFetch] = useState(true);
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
            getData(); // Fetch data every hour (3600000 ms)
          }, 3600000);
      
      //     // Cleanup function to clear the interval when the component unmounts
          return () => clearInterval(hourInterval);
      //   }, []); // Empty dependency array means this runs only on mount and unmount


  }, []);

  // console.log("1",weatherData);

  


  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");


  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={config.city}
        country={config.country}
        // description={weatherData.current.weather_code}
        description={
          getDescriptionCode(weatherData.current.weather_code)
            .description
        }
        iconName={
          getIconNameCode(weatherData.current.weather_code, weatherData)
            .iconName
        }
        // iconName={weatherData.weather[0].icon}
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
      {/* <Search
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      /> */}
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
   );
};

export default App;



// import { useState, useEffect } from "react";

// import { MainCard } from "../components/MainCard";
// import { ContentBox } from "../components/ContentBox";
// import { Header } from "../components/Header";
// import { DateAndTime } from "../components/DateAndTime";
// import { Search } from "../components/Search";
// import { MetricsBox } from "../components/MetricsBox";
// import { UnitSwitch } from "../components/UnitSwitch";
// import { LoadingScreen } from "../components/LoadingScreen";
// import { ErrorScreen } from "../components/ErrorScreen";
// import { getDescriptionCode } from "../services/helpers";
// import { getIconNameCode } from "../services/helpers";

// import config from "../config.json";
// import styles from "../styles/Home.module.css";

// export const App = () => {
//   const [cityInput, setCityInput] = useState(config.city);
//   const [triggerFetch, setTriggerFetch] = useState(true);
//   const [weatherData, setWeatherData] = useState();
//   const [unitSystem, setUnitSystem] = useState("metric");

//   const getData = async () => {
//     const res = await fetch("api/data", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cityInput }),
//     });
//     const data = await res.json();
//     setWeatherData({ ...data });
//     setCityInput("");
//   };

//   useEffect(() => {
//     getData(); // Fetch data when the component mounts

//     const hourInterval = setInterval(() => {
//       getData(); // Fetch data every hour (3600000 ms)
//     }, 3600000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(hourInterval);
//   }, []); // Empty dependency array means this runs only on mount and unmount

//   const changeSystem = () =>
//     unitSystem === "metric"
//       ? setUnitSystem("imperial")
//       : setUnitSystem("metric");

//   return weatherData && !weatherData.message ? (
//     <div className={styles.wrapper}>
//       <MainCard
//         city={config.city}
//         country={config.country}
//         description={
//           getDescriptionCode(weatherData.current.weather_code).description
//         }
//         iconName={
//           getIconNameCode(weatherData.current.weather_code, weatherData.current.day).iconName
//         }
//         unitSystem={unitSystem}
//         weatherData={weatherData}
//       />
//       <ContentBox>
//         <Header>
//           <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
//         </Header>
//         <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
//         <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
//       </ContentBox>
//     </div>
//   ) : (
//     <LoadingScreen loadingMessage="Loading data..." />
//   );
// };

// export default App;
