import React, {useState, useEffect } from 'react';

import axios from 'axios';

import ContentCard from '../ContentCard/ContentCard';


const API_KEY = process.env.REACT_APP_NASA_KEY 
const API_URL = process.env.REACT_APP_NASA_URL
 
export default function Grid() {
     //set initial data state as empty object
     const [nasaData, setNasaData] = useState({}); 

     // API query
      useEffect (() => {
          axios
              .get(`${API_URL}---api_key=${API_KEY}`)
              .then(response => {
                  console.log(response.data)
                  setNasaData(response.data)
              })
              .catch(error => {
                  console.log(".get Error: ", error)
              })
      }, [])// [] keeps code from making an infinite loop

    return (
        <div>
        <ContentCard 
            //use returned data here--
            key={nasaData.id}
            // nasaData.url
            url={nasaData.url}
            //nasaData.title
            date={nasaData.date}
            //nasaData.text
            explanation={nasaData.explanation}
        />
            
        </div>
    )
}
