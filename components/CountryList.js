import React, { useState, useEffect } from "react";
import axios from "axios";
import {url} from "../utils/config";
import Card from "./Card";

export default function CountryList() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        getCountries().then(res => setCountries(res.data))
    }, [])

    const getCountries = async () => {
        const countryData = await axios.get(url);
       return countryData;
    }

    console.log(countries)

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {
                countries?.map(country => {
                        return <Card country={country}/>
                    })
            }
        </div>
    )
}
