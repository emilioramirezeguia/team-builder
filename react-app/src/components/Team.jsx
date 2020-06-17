import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 2.5%;
    margin: 2.5% 0;
    width: 25%;
`

function Card(props) {
    const { member } = props;

    if (!member) {
        return <h3>Fetching team members</h3>
    }

    return (
        <StyledCard>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </StyledCard>
    )
}

export default Card;