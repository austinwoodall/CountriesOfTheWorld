import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

const Container = styled.div`
    padding: 30px 40px;
`

const BackButton = styled.button`
    background: #fff;
    border: none;
    padding: 8px 40px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
    border-radius: 5px;
    cursor: pointer;
`

const Image = styled.div`
    background-image: url(${props => props?.img});
    background-position: center;
    background-size: cover;
    width: 500px;
    object-fit: contain;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
`

const InformationContainer = styled.div`
    padding: 20px 0px;
    margin-left: 40px;
`

function CountryCard(props) {
    const router = useRouter();
    console.log(props?.country ?? null)
    return (
        <Container>
            <BackButton onClick={() => router.push(`/`)}>
                Back
            </BackButton>
            <div style={{ padding: "40px 0", display: "flex" }}>
                <Image img={props?.country[0]["flag"]} />
                <InformationContainer>
                    <div>
                        <h1>{props.country[0]["name"]}</h1>
                    </div>
                    <div style={{ display: "flex", minWidth: 500,  justifyContent: "space-between"}}>
                        <div>
                            <p>Native Name: {props?.country[0]["nativeName"]}</p>
                            <p>Population: {props?.country[0]["population"]}</p>
                            <p>Region: {props?.country[0]["region"]}</p>
                            <p>Sub Region: {props?.country[0]["subregion"]}</p>
                            <p>Capital: {props?.country[0]["capital"]}</p>
                        </div>
                        <div>
                            <p>Top Level Domain: {props?.country[0]["topLevelDomain"]}</p>
                            <p>Currencies: {props?.country[0]["currencies"].map(currency => currency.code)}</p>
                            <p>Languages: {props?.country[0]["languages"].map(language => language.name + ", ")}</p>
                        </div>
                    </div>
                </InformationContainer>
            </div>
        </Container>
    )
}

export default CountryCard;
