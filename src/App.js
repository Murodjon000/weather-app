import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API = '7fdf9e5f938d4c2fb8194719200312';

function App() {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const url = `http://api.weatherapi.com/v1/current.json`;

  useEffect(() => {
    axios
      .get(url, {
        params: {
          q: search || 'london',
          key: API,
        },
      })
      .then(({ data: { current } = {} }) => setWeatherData(current))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="app">
      <div className="search__bar">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="main__box">
        <h2>{search}</h2>
        <h2>{weatherData?.temp_f}</h2>
        <img src={weatherData?.condition?.icon} alt="" />
        <h2>{weatherData?.condition?.text}</h2>
        <h5>{weatherData?.last_updated}</h5>
      </div>
      <div className="grid__container">
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
