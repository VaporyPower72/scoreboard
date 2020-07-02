import React, { useState } from "react";
import Player from "./Player";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {players.map((player) => (
        <Player name={player.name} score={player.score} />
      ))}
    </div>
  );
}
