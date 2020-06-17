import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import Team from "./components/Team.jsx";
import TeamForm from "./components/TeamForm.jsx";
import './App.css';

// The default team list.
const initialTeam = [
  {
    id: uuid(),
    name: "Emilio Ramirez",
    email: "emilio@hey.com",
    role: "Web Developer"
  }
];

// The default form values.
const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  // Holds state for team list.
  const [team, setTeam] = useState(initialTeam);

  // Holds state for form values.
  const [form, setForm] = useState(initialFormValues);

  // Holds state for error message.
  const [error, setError] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.name || !form.email || !form.role) {
      setError("Please fill out your form first.");
      return
    }
    const newTeam = { ...form, id: uuid() };
    // setTeam(team => [newTeam, ...team]);
    setTeam(function (team) {
      return [newTeam, ...team];
    })
    setForm(initialTeam);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span style={{ color: "red" }}>{error}</span>
        <TeamForm
          team={team}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <h1>Meet the team!</h1>
        {
          team.map(member => {
            return <Team key={member.id} member={member} />
          })
        }
      </header>
    </div >
  );
}

export default App;
