import { useState, createContext } from "react";

const WeatherContext = createContext()
const WeatherProvider = ({ children }) => {

    // console.log(import.meta.env.VITE_API_KEY);
    const [search, setSearch] = useState({
        city: "",
        country: "",
    })

    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    const getWeather = data => {
        console.log(data);
    }
    return (
        <WeatherContext.Provider value={{
            search,
            searchData,
            getWeather,
        }}>
            {children}
        </WeatherContext.Provider>
    )
}


export {
    WeatherProvider
}

export default WeatherContext