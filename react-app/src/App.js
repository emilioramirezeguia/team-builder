import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";
import './App.css';

const originalTeam = [{
  id: uuid(),
  name: "Emilio Ramirez",
  email: "emilio@hey.com",
  role: "Web Developer"
}];

function App() {
  const [team, setTeam] = useState(originalTeam);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meet the team!</h1>
        {
          team.map(member => {
            return <Card key={member.id} member={member} />
          })
        }
        <Form />
      </header>
    </div>
  );
}

export default App;
