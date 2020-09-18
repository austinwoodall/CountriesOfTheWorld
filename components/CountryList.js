import React from "react";
import Card from "./Card";

export default function CountryList(props) {
    console.log(props)
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {
                props.countries?.map((country) => {
                        return <Card key={country.name} country={country}/>
                    })
            }
        </div>
    )
}
