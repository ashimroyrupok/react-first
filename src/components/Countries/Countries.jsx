import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countires.css'

const Countries = () => {

    const [countires, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlag,setVisitedFlag] = useState([])

    const flagHandeler = flag => {

        const newVisited = [...visitedFlag,flag]
        setVisitedFlag(newVisited)


    }


    const handleCountry = country => {
        console.log(country);
        console.log('country button clicked.');
        const newAllVisited = [...visitedCountries, country]
        setVisitedCountries(newAllVisited)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (





        <div>

            <h2>Countries: {countires.length}</h2>

            <div className="flag-container">
                {
                    visitedFlag.map(flag => <img className="flag-container" src={flag}></img>)
                }
            </div>

            <div>
                <h2> Visited Countries: {visitedCountries.length} </h2>

                <ul>

                    {
                        visitedCountries.map(country => <li> {country.name.common}</li>)
                    }

                </ul>

            </div>

            <div className="countries-container">


                {
                    countires.map(country =>
                        <Country key={country.cca2} handleCountry={handleCountry} 
                        flagHandeler = {flagHandeler}
                        country={country}></Country>)
                }

            </div>


        </div>
    );
};

export default Countries;