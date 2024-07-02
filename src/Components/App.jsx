import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import Search from "./Search";
import ResultContainer from "./ResultContainer";
function App() {
  const name = require("@rstacruz/startup-name-generator");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [result, setResult] = useState([]);

  function handleInputChange(inputvalue) {
    setHeaderExpanded(!inputvalue);
    setResult(name(inputvalue));
    if (!inputvalue) {
      setResult([]);
    }
  }

  return (
    <div>
      <Header headerExpanded={headerExpanded} />
      <Search onInputChange={handleInputChange} />
      <ResultContainer result={result} />
    </div>
  );
}

export default App;
