import React from "react";

export default function Player(props) {
  return (
    <ul>
      {" "}
      <li className="Player">
        {props.name} {props.score}
      </li>
    </ul>
  );
}
