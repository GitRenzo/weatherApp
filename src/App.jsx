import AppWeather from "../components/AppWeather"
import { WeatherProvider } from "../context/weatherProvider"

function App() {

  return (
    <>
    <WeatherProvider>
      <header>
        <h1>Get Weather App</h1>
      </header>
      <AppWeather />
    </WeatherProvider>
    </>
  )
}

export default App
