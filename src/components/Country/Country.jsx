import { useState } from "react";
import "./Country.css"

const Country = ({country,handleCountry,flagHandeler}) => {

    const {name,flags,area,cca2}  = country

    // console.log((handleCountry));

    const [visited,setVisited] = useState(false)

    const handleBtn =() => {

        setVisited(!visited)



    }


    return (
        <div className={`country ${visited? 'visited': 'country'}  `}>
            <h4>Name: {name?.common}</h4>
            <img src={flags?.png} alt="" />
            <p>Area: {area}</p>
            <p>Code: {cca2}</p>

            <button onClick={handleBtn} type="button" class="btn btn-outline-primary"> {visited? 'visited' : 'Going'}</button>

            {
                visited? 'this is visted' : 'i want to visit'
            }
            <br />

            <br />

            <button onClick={() => handleCountry(country) }> Add on visited list</button>

            <br />

            <button onClick={() => flagHandeler(country.flags.png)} >Add flag</button>
            
        </div>
    );
};

export default Country;