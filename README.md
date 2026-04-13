
# Weather App

---

## Description
This is a React-based weather application developed as part of the YouCode training program. The application allows users to search for real-time weather conditions and view hourly forecasts for any city worldwide.

---

## Key Features
* **Current Weather**: Displays temperature, humidity, wind speed, and weather icons.
* **Search**: Find weather data by entering a city name.
* **Geolocation**: Automatic weather detection based on the user's current position.
* **Short-term Forecast**: Shows the next 3 hours of weather, filtered from the current local time.
* **Multi-language Support**: Interface available in English and French.
* **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

---

## Tech Stack
* **Frontend**: React.js (Vite)
* **API**: WeatherAPI
* **Styling**: CSS3
* **Language**: JavaScript (ES6+)

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/mouad-boumahdi/weather-app.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your API key:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### 4. Run the application
```bash
npm run dev
```

---

## Project Logic
* **Data Fetching**: The app uses two separate API endpoints for current weather and forecast data to ensure accurate data separation and management.
* **Hourly Filtering**: Instead of showing the start of the day (00:00), the app filters the forecast array to display only the upcoming 3 hours based on the specific city's local time.
* **Internationalization**: A centralized translation object manages all UI text, allowing for instant language switching between English and French without page reloads.

---

## Author
**Mouad Boumahdi**
Full Stack Developer Student at YouCode.
