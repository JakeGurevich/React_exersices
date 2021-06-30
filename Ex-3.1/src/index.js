import React, { useEffect } from "react";
import ReactDom from "react-dom";
import App from "./components/App";
if (module.hot) {
  module.hot.accept();
}

ReactDom.render(<App />, document.querySelector("#root"));
