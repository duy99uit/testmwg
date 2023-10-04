import React from "react";
import useToggle from "../hook/useToggle";

function Test() {
  const [value, toggleValue] = useToggle(false);
  return (
    <React.Fragment>
      <div>
        <p>Duy test something</p>
        <div>{value.toString()}</div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button>
      </div>
    </React.Fragment>
  );
}

export default Test;
