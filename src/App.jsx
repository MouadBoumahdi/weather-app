import { useState } from "react";

function App(){

  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null)
  const handleSearch = async()=>{
   
 
  

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

  return(
    <div>
      <h1>Weather app</h1>
      <input type="text" value={city} placeholder="Enter the city name" onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {weather &&(
      <div>
        <h2>{weather.location.name}</h2>
        <img src={`https:${weather.current.condition.icon}`} alt="" />
        <p>Temperature: {weather.current.temp_c}°C</p>
        <p>Humidity: {weather.current.humidity}°C</p>
        <p>Wind Speed: {weather.current.wind_kph} km/h</p>
      </div>
    )};

    </div>

    
    
  )
  
;
}


export default App;