import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';

const originalTeam = [{
  id: uuid(),
  name: "Emilio Ramirez",
  email: "emilio@hey.com",
  role: "Web Developer"
}];

function App() {
  const [team, setTeam] = useState(originalTeam);
  debugger
  return (
    <div className="App">
      <header className="App-header">
        {
          team.map(member => {
            return member.name
          })
        }
      </header>
    </div>
  );
}

export default App;
