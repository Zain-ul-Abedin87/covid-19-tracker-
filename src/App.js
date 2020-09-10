import React, { useState } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

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
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="Abc">
            {countries.map((item) => 
              <MenuItem value={item}>{item}</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
