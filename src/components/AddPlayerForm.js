import React, { useState } from "react";

export default function AddPlayerForm() {
  const [name, set_name] = useState();
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
            set_name(event.target.value);
          }}
          type="text"
          placeholder="Name"
          value={name}
        />{" "}
        <button>Add</button>
      </p>
    </div>
  );
}
