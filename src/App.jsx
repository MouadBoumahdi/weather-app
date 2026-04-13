import { useState } from "react";
import './index.css';

function App(){

  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null)
  const handleSearch = async()=>{
   
  if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }
  

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try{  
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
      console.log(data);



    }catch(error){
      console.log(error);
    }
  }



  const getLocationWeather = ()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async (position)=>{
        const lat = position.coords.latitude; 
        const lon = position.coords.longitude;

        console.log(lat)
        console.log(lon)



        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;


        try{  
              const response = await fetch(url);
              const data = await response.json();

              setWeather(data);
              console.log(data);



        }catch(error){
          console.log(error);
        }

      })

    }else {
    alert("La géolocalisation n'est pas supportée.");
    }
  }

  return(
    <div>
        
      <h1>WEATHER APP</h1>

      <div className="cityInput">
        <input type="text" value={city} placeholder="Enter the city name" onChange={(e) => setCity(e.target.value)} />
        <button onClick={getLocationWeather}>Current location weather</button>
        <button onClick={handleSearch}>Search</button>
      </div>

      {weather &&(
      <div className="weatherContainer">
        <h2>{weather.location.country} {weather.location.name}</h2>
        <img src={`https:${weather.current.condition.icon}`} alt="" />
        <p>Temperature: {weather.current.temp_c}°C</p>
        <p>Humidity: {weather.current.humidity}°C</p>
        <p>Wind Speed: {weather.current.wind_kph} km/h</p>
      </div>
    )}

    </div>

    
    
  )
  

}


export default App;