import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Janr(props) {
  const [names, setNames] = useState([])

  useEffect(() => {
    const a = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    // https://api.themoviedb.org/3/discover/tv?with_genres=10766&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU
    a.then((b) => {
      console.log(b)
      setNames(b.data.genres);
    })
  }, [])
  return (
    <div className="mt-4">
      {names.map(v => (
        <div style={{ width: "350px" }} className="border p-1">{v.name}</div>
      ))}
    </div>
  );
}

export default Janr;