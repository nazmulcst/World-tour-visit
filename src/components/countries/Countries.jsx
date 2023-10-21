import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
       const [countries, setCountries] = useState([])

       const [visitedCountries, setVisitedCountries] = useState([])


       useEffect (() =>{
              fetch('https://restcountries.com/v3.1/all')
              .then(res => res.json())
              .then(data => setCountries(data))
       },[])

       const handleCountries = country =>{
              console.log('kkkkkkk')
              console.log(country)
              const newVisitedCountry = [...visitedCountries,country];
              setVisitedCountries(newVisitedCountry)
       }



       return (
              <div>
                     <h3>Countries: {countries.length}</h3>
                    <div>
                      <h5>Visited Country: {visitedCountries.length}</h5>
                      <ul>
                            {
                                   visitedCountries.map(country => <li>{country.name.common}</li>)
                            }
                      </ul>
                    </div>
                    <div className="container">
                      {
                            countries.map(n => <Country country={n} handleCountries={handleCountries}></Country>)
                     }
                    </div>
              </div>
       );
};

export default Countries;