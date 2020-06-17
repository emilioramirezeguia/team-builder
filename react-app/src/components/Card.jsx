import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 2.5%;
`

function Card(props) {
    const { member } = props;

    return (
        <StyledCard>
            <h2>{member.name}</h2>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
        </StyledCard>
    )
}

export default Card;