import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <small>
        <a
          href="https://github.com/yagmurrizvi/Weather-react-homework"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Yagmur Rizvi
      </small>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
