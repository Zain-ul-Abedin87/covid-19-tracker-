import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./Components/InfoBox";

function App() {
  const [countries, setcountries] = useState([]);
  const [country, setCountry] = useState("wordWide");
  //  useEffect is mainly  use run a pice of code according to Ginven Condtaion
  useEffect(() => {
    // inside Code will b run once when the Componet loads not  agian
    // asnync is use here becase data is fetch from server
    // send request wait for it ,And do SomeThing

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((items) => ({
            name: items.country,
            value: items.countryInfo.iso3,
          }));
          console.log(countries);
          setcountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="wordWide">Wordwide</MenuItem>
            {countries.map((item, i) => (
              <MenuItem key={i} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl> 
      </div>
      <div className="App-status">
        <InfoBox title="corona-cases" total={2000} cases={123} />
        <InfoBox title="Recoverd " total={2000} cases={123} />
        <InfoBox title="Details" total={2000} cases={123} />
      </div>
    </div>
  );
}

export default App;
