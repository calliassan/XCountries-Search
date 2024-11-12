import logo from "./logo.svg";
import "./App.css";
import { Countries } from "./countries";
import styles from "./countries.module.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className={styles.countriesgrid}>
        <Countries />
      </div>
    </div>
  );
}

export default App;
