import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import Card from "./components/Card.jsx";
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
        {
          team.map(member => {
            return <Card key={member.id} member={member} />
          })
        }
      </header>
    </div>
  );
}

export default App;
