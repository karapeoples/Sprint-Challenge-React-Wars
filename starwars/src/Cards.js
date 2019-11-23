import React from 'react';
import style from 'styled-components'
import {
    Card,
    CardBody,
    CardText,
    CardHeader,
    CardSubtitle,
    Col,
  } from 'reactstrap';

const Cards = ({name, gender, birth, hair, eyes}) => {

    const Entry = style.div`
    background: #C0A080
    color: white;
    border: 4px double white;
    border-radius: 5%;
    `
   const margin = {
       margin: '2%',
   }
  const padding = {
      padding: '1%',
  }
  
  


    return(
        <Col lg="6">
         <Card style={margin}>
                <CardBody style={padding}>
                    <Entry>
                        <h1>{name}</h1>
                        <h3>Born:{birth}</h3>
                        
                       <p> Gender:{gender}</p>
                        <p>Hair: {hair}</p>
                        <pt>Eyes: {eyes}</pt>
                    
                    </Entry>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Cards