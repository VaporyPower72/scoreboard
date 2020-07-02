import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (
    <ul>
      {" "}
      <li className="Player">
        {props.name} (Score: {props.score})
        <button onClick={onClickIncrement}>Increment</button>
      </li>
    </ul>
  );
}
