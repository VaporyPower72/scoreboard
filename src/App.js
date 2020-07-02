import React from "react";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
import AddPlayerForm from "./components/AddPlayerForm";
import "./style/App.scss";
function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Scoreboard />
        <AddPlayerForm />
      </main>
    </div>
  );
}

export default App;
