import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  const [countries, setcountries] = useState([
    "Pakistan",
    "Turki",
    "Afganistan",
  ]);
  //  useEffect is mainly  use run a pice of code according to Ginven Condtaion
  useEffect(() => {
    // inside Code will b run once when the Componet loads not  agian
    // asnync is use here becase data is fetch from server
    // send request wait for it ,And do SomeThing

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countryDetails = data.map((items) => ({
            name: items.country,
            value: items.countryInfo.ios3,
          }));
          setcountries(countryDetails)
        });
        getCountriesData()
    };
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="Abc">
            {countries.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
