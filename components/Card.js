import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 250px;
    background: #fff;
    margin: 20px;
   border-radius: 5px;
   box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
`
const ImageContainer = styled.div`
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    object-fit: contain;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
const InfoContainer = styled.div`
    padding: 10px 20px;
`

export default function Card(props) {

    return (
        <Container>
            <ImageContainer>
                <Image src={props.country["flag"]}  alt={props.country["flag"]}/>
            </ImageContainer>
            <InfoContainer>
                <h3>{props.country.name}</h3>
                <p>Population: {props.country["population"]}</p>
                <p>Region: {props.country.region}</p>
                <p>Capital: {props.country["capital"]}</p>
            </InfoContainer>
        </Container>
    )
}
