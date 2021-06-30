import React, { useState, useEffect } from "react";
import Fetch from "./Fetch";
import "./app.css";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show or not</button>
      {show && <Fetch />}
    </div>
  );
};
export default App;
