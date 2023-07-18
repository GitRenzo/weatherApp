import useWeather from "../hooks/useWeather"
function Weather() {

    const { weatherResult } = useWeather()
    const { name, main } = weatherResult.data

    const kelvin = 273.15
    return (
        <div className="contenedor clima">
            <h2>The weather in {name} is: </h2>
            <p>{parseInt(main.temp - kelvin)} <span>&deg;C</span></p>
            <div className="temp_min_max">
                <p>Min: {parseInt(main.temp_min - kelvin)} <span>&deg;C</span></p>
                <p>Max: {parseInt(main.temp_max - kelvin)} <span>&deg;C</span></p>
            </div>
        </div>
    )
}

export default Weather