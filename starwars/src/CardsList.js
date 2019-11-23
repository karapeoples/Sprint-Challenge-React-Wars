import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Cards from "./Cards"
import { Container, Row } from 'reactstrap'

const CardsList = () => {
    const [info, setInfo]=useState([]);
 useEffect(()=> {
    axios
    .get('https://swapi.co/api/people')
    .then(data => {
    /* console.log('API INFO HERE', data.data.results); */
    setInfo(data.data.results);
})
.catch(error => {console.log('None for You', error);
});
}, []);
/* console.log(info) */


 return (
 
     <Container> 
         <Row>
     {info.map(result => {
       return <Cards name={result.name}  birth={result.birth_year} gender={result.gender} hair={result.hair_color}  eyes={result.eye_color} />;
     })}
     </Row>
     </Container>
    
   
 );
}

export default CardsList;