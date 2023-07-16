import { useContext } from "react";
import WeatherContext from "../context/weatherProvider";

const useWeather = () => {
    return useContext(WeatherContext)
}

export default useWeather