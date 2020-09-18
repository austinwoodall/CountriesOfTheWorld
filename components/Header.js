import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 40px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
`

export default function Header() {

    return (
        <Container>
            <h1 style={{ fontSize: 20 }}>Countries of the world.</h1>
            <button>Dark Mode</button>
        </Container>
    )
}
