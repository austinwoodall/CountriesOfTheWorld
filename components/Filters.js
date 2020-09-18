import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px 50px;
`

const Input = styled.input`
    height: 20px;
    width: 400px;
    border: none;
    padding: 20px 10px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
    border-radius: 5px;
`

export default function Filters() {

    return (
        <Container>
            <Input placeholder={"Search for a country..."} />
        </Container>
    )
}
