import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

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
const Image = styled.div.attrs(({ img }) => ({
    style: {
        backgroundImage: `url(${img})`
    },
}))`
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 180px;
    object-fit: contain;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
`
const InfoContainer = styled.div`
    padding: 10px 20px;
`

export default function Card(props) {
    const router = useRouter();

    return (
        <Container style={{ cursor: "pointer" }} onClick={() => router.push(`/country/${props?.country["capital"]}`)}>
            <ImageContainer>
                <Image img={props?.country["flag"]}  alt={props?.country["flag"]}/>
            </ImageContainer>
            <InfoContainer>
                <h3>{props?.country.name}</h3>
                <p>Population: {props?.country["population"]}</p>
                <p>Region: {props?.country.region}</p>
                <p>Capital: {props?.country["capital"]}</p>
            </InfoContainer>
        </Container>
    )
}
