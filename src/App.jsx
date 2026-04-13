import { useState } from "react";
import './index.css';

function App(){

  const [city,setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [weather,setWeather] = useState(null)

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  
  const handleSearch = async()=>{
   
  if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }
  

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const urlforecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);

      const forecastResponse = await fetch(urlforecast);
      const forecastData = await forecastResponse.json();
      
      setForecast(forecastData.forecast.forecastday[0].hour.slice(0, 3));
      
      console.log(forecastData);

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



        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;
        const urlforecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          setWeather(data);

          const fResponse = await fetch(urlforecast);
          const fData = await fResponse.json();
          setForecast(fData.forecast.forecastday[0].hour.slice(0, 3));
        }catch(error){
          console.log(error);
        }

      })

    }else {
    alert("La géolocalisation n'est pas supportée.");
    }
  }




    const translations = {
    en: {
      title: "WEATHER APP",
      placeholder: "Enter the city name",
      search: "Search",
      currentLocation: "Local Weather",
      temp: "Temperature",
      humidity: "Humidity",
      wind: "Wind Speed"
    },
    fr: {
      title: "APPLICATION MÉTÉO",
      placeholder: "Entrez le nom de la ville",
      search: "Rechercher",
      currentLocation: "Météo locale",
      temp: "Température",
      humidity: "Humidité",
      wind: "Vitesse du vent"
    }
  };

  const [language, setLanguage] = useState('en');








  


  return(
    <div>
        
      <h1>{translations[language].title}</h1>

      <div className="cityInput">
        <input type="text" value={city} placeholder={translations[language].placeholder} onChange={(e) => setCity(e.target.value)} />
        <button onClick={getLocationWeather}>{translations[language].currentLocation}</button>
        <button onClick={handleSearch}>{translations[language].search}</button>
      </div>

      {weather &&(
      <div className="weatherContainer">
        <h2>{weather.location.country} {weather.location.name}</h2>
        <img src={`https:${weather.current.condition.icon}`} alt="" />
        <p>{translations[language].temp}: {weather.current.temp_c}°C</p>
        <p>{translations[language].humidity}: {weather.current.humidity}°C</p>
        <p>{translations[language].wind}: {weather.current.wind_kph} km/h</p>

       <div className="forecast" style={{ display: 'flex', gap: '20px'}}>
            {forecast.map((hour) => (
              <div  className="hour-item">
                <p>{hour.time.split(' ')[1]}</p>
                <img src={`https:${hour.condition.icon}`} alt="" width="30"/>
                <p>{hour.temp_c}°C</p>
              </div>
            ))}
          </div>
      </div>
    )}


      <div className="Language">
        <button onClick={()=>setLanguage('en')}>en</button>
        <button onClick={()=>setLanguage('fr')}>fr</button>
      </div>

    </div>

    
    

    
    
  )
  

}


export default App;