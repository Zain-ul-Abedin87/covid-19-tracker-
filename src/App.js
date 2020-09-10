import React, { useState } from "react";
import "./App.css";
import { formControl, Select, MenuItem } from "@material-ui/core";

function App() {
  const [countries, setcountries] = useState([
    "Pakistan",
    "Turki",
    "Afganistan",
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19</h1>
        <formControl className="app__dropdown">
          <Select variant="outlined" value="Abc">
            {countries.map((country) => {
              <MenuItem value={country}>{country}</MenuItem>
            })}
           
          </Select>
        </formControl>
      </div>
    </div>
  );
}

export default App;
