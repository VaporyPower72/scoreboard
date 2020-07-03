import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
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

  const [sort_by, set_sort_by] = useState("score");

  const sortFunction = sort_by === "score" ? compare_score : compare_name;

  const players_sorted = [...players].sort(sortFunction);

  const incrementScore = (id) => {
    console.log(id);
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,

          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(new_players_array);
  };

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const resetScore = () => {
    const players_reset = players.map((player) => {
      if (player) {
        return {
          ...player,
          score: player.score - player.score,
        };
      } else {
        return player;
      }
    });
    set_players(players_reset);
  };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    const newPlayer = { name: name, score: 0, id: players.length + 1 };
    const newPlayers = [...players, newPlayer];
    set_players(newPlayers);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>

      <p>
        <div>
          <button onClick={resetScore}>Reset</button>
        </div>
        Sort order:
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>

      {players_sorted.map((player) => (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      ))}

      <AddPlayerForm
        addPlayer={(name) => {
          console.log("Let's add a new player with the name:", name);
        }}
        addPlayer={addPlayer}
      />
    </div>
  );
}
