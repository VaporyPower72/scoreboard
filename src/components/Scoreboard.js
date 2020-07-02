import React, { useState } from "react";
import Player from "./Player";

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sorted = [...players].sort(compare_name);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {players_sorted.map((player) => (
        <Player name={player.name} score={player.score} />
      ))}
    </div>
  );
}
