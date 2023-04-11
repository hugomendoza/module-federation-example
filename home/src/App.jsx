import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Test } from "test/Test";
import { Button, Headings } from "components/components";

const App = () => {

  const [counter, setCounter] = useState(0)

  const onClick = (number) => {
    setCounter( counter + number );
  }

  return (

    <>
      <h1>{counter}</h1>
      <Test />
      <Button
        value="vender"
        onClick={ () => onClick(5) }
      />
      <Headings />
    </>
  )

};
ReactDOM.createRoot(document.getElementById("app")).render(
  <App />
);