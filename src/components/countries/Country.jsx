import { useState } from "react";
import './kk.css'

const Country = ({country, handleCountries}) => {

       console.log(country)
       const {name, flags, population,area, ccn3} = country;

       

       // console.log(props.country)
       // const{name} = props.country;

       // const [btn, setBtn] = useState()
       // const handler => () ={
       //        console.log('hello')
       // }
       const [visited, setVisited] = useState(false);
       const handle = () =>{
              setVisited(!visited)
       }
       // console.log(handleCountries)

       
       return (
              <div className= {`color ${visited ? 'visited' : 'non-visited'}`}>
                     <h3>Name:{name.common}</h3>
                     <img src= {flags.png} alt="" />
                     <h4>Area: {area}</h4>
                     <h4>Population:{population}</h4>
                     <h4>Code: {ccn3}</h4>
                     <button onClick={() =>handleCountries(country)}>Mark visited</button>
                     <br />
                     <button onClick={handle} className="btn">{visited? "Visited" : "Going"}</button>
                     {visited? 'I have visited here' : 'I am going.'}
                    
                     
              </div>
       );
};

export default Country;