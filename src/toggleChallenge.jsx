import { useState } from "react";

export function ToggleChallenge() {
  const [switchStatus, setStatus] = useState(false);

  const handleClick = () => {
    setStatus((prevState) => !prevState);
  };

  return (
    <>
      <p>
        {switchStatus ? "The light is switched on" : "The light is switched off"}
      </p>
      <button
        className={switchStatus ? "btn btn-danger" : "btn btn-warning"}
        onClick={handleClick}
      >
        {switchStatus ? "OFF" : "ON"}
      </button>
    </>
  );
}
