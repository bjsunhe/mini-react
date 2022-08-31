import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import logo from "./assets/logo.svg";
import IndexRouter from "./router/IndexRouter";

function App() {
  return (
    <div className="App">
      <IndexRouter></IndexRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
