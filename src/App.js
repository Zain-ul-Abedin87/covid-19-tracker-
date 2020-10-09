import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,Table
} from "@material-ui/core";
import InfoBox from "./Components/InfoBox";
import Map from "./Components/Map";

function App() {
  const [countries, setcountries] = useState([]);
  const [country, setCountry] = useState("wordWide");
  const [countryInfo, setcountryInfo] = useState({});
  const [tableData,setTableData] =useState([])

   useEffect(()=>{
     fetch ("https://disease.sh/v3/covid-19/all")
     .then((response)=> response.json())
     .then((data)=>{
       setTableData(data)
       setcountryInfo(data)
     })
   },[])
  
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

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    console.log(countryCode);
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setcountryInfo(data);
      });
  };
  console.log(Object.values(countryInfo).map((item) => item.flag));

  return (
    <div className="app">
      <div className="app_left">
        <div className="app__header">
          <h1 className="covid-heading">
            Covid-19  Info About <span></span>
            <span className="country-heading">
              {countryInfo.country}
              {Object.values(countryInfo).map(
                (item) => {
                  if (item.flag) {
                    return <img src={item.flag} className="country_flag"></img>;
                  } else {
                    return console.log("nae mila");
                  }
                }
                // console.log(item.flag)
              )}
            </span>
          </h1>

          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="wordWide">Wordwide</MenuItem>
              {countries.map((item, i) => (
                <MenuItem key={i} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app-status">
          <InfoBox
            title="CoronaVirus"
            cases={countryInfo.todayCases}
            total={countryInfo.active}
          />
          <InfoBox
            title="Recoverd People "
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="No Of Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <Map />
      </div>
      <Card>
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table/>
          <h4>World Wide Cases</h4>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
