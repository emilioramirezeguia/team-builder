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
const emptyForm = {
    name: "",
    email: "",
    role: ""
}

function Form() {
    const [form, setForm] = useState(emptyForm);
    const [error, setError] = useState("");

    const handleChange = event => {
        const { name } = event.target;
        setForm({ ...form, [name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!form.name || !form.email || !form.role) {
            setError("Please fill out your form first.");
            return
        }
        setForm(emptyForm);
    }

    return (
        < StyledForm onSubmit={handleSubmit} >
            <label>
                Name:&nbsp;
                <input name="name" type="text" value={form.name} onChange={handleChange} />
            </label>
            <label>
                Email:&nbsp;
                <input name="email" type="text" value={form.email} onChange={handleChange} />
            </label>
            <label>
                Role:&nbsp;
                <select name="role" value={form.value} onChange={handleChange}>
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

export default Form;