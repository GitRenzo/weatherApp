import { useState } from "react"
import useWeather from "../hooks/useWeather"
const Form = () => {

    const [alert, setAlert] = useState("")

    const { search, searchData, getWeather } = useWeather()
    const { city, country } = search

    
    const handleSubmit = (e) => {
        e.preventDefault()
         if(Object.values(search).includes("")){
            setAlert("All fields are required")
            return
        }

        getWeather(search)
    }

    return (
        <div className="contenedor">
            {alert && <p>{alert}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city"
                        onChange={searchData}
                        value={city}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country"
                        onChange={searchData}
                        value={country}
                    >
                        <option value="">Choose a country</option>
                        <option value="US">The United States</option>
                        <option value="BO">Bolivia</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">España</option>
                        <option value="PE">Peru</option>

                    </select>
                </div>
                <input type="submit" value="Get weather" />
            </form>
        </div>
    )
}

export default Form