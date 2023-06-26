import React from "react";

function Final(props) {
  const { name, id, remove } = props;
  return (
    <li>
      <p>{name}</p>
      <button onClick={() => remove(id)}>remove</button>
    </li>
  );
}

export default Final;
