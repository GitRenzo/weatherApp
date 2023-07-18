import Form from "./Form"
import Weather from "./Weather"
import useWeather from "../hooks/useWeather"
import Loading from "./Loading"

const AppWeather = () => {
    const { weatherResult, loader, noResult } = useWeather()
    const isEmptyObject = (objectWeather) => Object.keys(objectWeather).length === 0;
    console.log(`No result state: ${noResult}`);
    return (
        <>
            <main className="dos-columnas">
                <Form />

                {noResult ? "No results available" : loader ? <Loading /> : !isEmptyObject(weatherResult) && <Weather />}

            </main>
        </>
    )
}

export default AppWeather