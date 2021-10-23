import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../Cards';

function Serial(props) {
    const [serial, setSerial] = useState([])

    useEffect(() => {
      const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      a.then((b) => {
        console.log(b)
        setSerial(b.data.results)
      })
  },[])
    return (
        <div>
            <h1>TV сериады шоу</h1>
            <Cards name={serial}/>
        </div>
    );
}

export default Serial;