import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 2.5% 0;
    padding: 2.5%;
    label {
        color: black;
        display: flex;
        justify-content: space-between;
    }
`

function TeamForm(props) {
    const { team, handleChange, handleSubmit } = props;

    return (
        // onSubmit handler to prevent a page refresh after submit
        <StyledForm onSubmit={handleSubmit}>
            <label>Name:&nbsp;
                <input
                    type="text"
                    name="name"
                    value={team.name}
                    onChange={handleChange}
                />
            </label>
            <label>Email:&nbsp;
                <input
                    type="text"
                    name="email"
                    value={team.email}
                    onChange={handleChange}
                />
            </label>
            <label>Role:&nbsp;
                <select
                    name="role"
                    value={team.role}
                    onChange={handleChange}
                >
                    <option value="">Choose a Role</option>
                    <option value="Backend Dev">Backend Dev</option>
                    <option value="Frontend Dev">Frontend Dev</option>
                    <option value="Designer">Designer</option>
                </select>
            </label>
            <input type="submit" />
        </StyledForm >
    )
}

export default TeamForm;