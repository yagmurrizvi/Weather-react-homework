import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function submitSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=525c9c9ac5b08ed476653a02fbaab704&units=metric`;
    axios.get(url).then(showWeather);
    return setSearch(city);
  }

  function showWeather(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={submitSearch}>
        <input type="search" placeholder="Enter a city" onChange={newCity} />
        <input type="submit" value="Search" />
      </form>
      <Weather
        city={search}
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
