import { useState, createContext } from "react";
import axios from "axios"

const WeatherContext = createContext()
const WeatherProvider = ({ children }) => {

    const [search, setSearch] = useState({
        city: "",
        country: "",
    })

    const [weatherResult, setWeatherResult] = useState({})
    const [loader, setLoader] = useState(false)
    const [noResult, setNoResult] = useState(false)

    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    const getWeather = async data => {
        setLoader(true)
        setNoResult(false)
        try {
            const { city, country } = data
            const appId = import.meta.env.VITE_API_KEY
            const urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)},${country}&limit=1&appid=${appId}`

            const resLocation = await axios(urlLocation)
            const { lat, lon } = resLocation.data[0]

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const resWeather = await axios(urlWeather)

            setWeatherResult(resWeather)


        } catch (error) {
            console.error(error);
            setNoResult(true)
        }
        finally{
            setLoader(false)
        }

    }
    return (
        <WeatherContext.Provider value={{
            search,
            searchData,
            getWeather,
            weatherResult,
            loader,
            noResult,
        }}>
            {children}
        </WeatherContext.Provider>
    )
}


export {
    WeatherProvider
}

export default WeatherContext