import { useState } from "react";

function App(){

  const [city,setCity] = useState('');
  const handleSearch = ()=>{
      console.log("Testing search for: ",city)
  }
  

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  return(
    <div>
      <h1>Weather app</h1>
      <input type="text" value={city} placeholder="Enter the city name" onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
    
  )

;
}


export default App;