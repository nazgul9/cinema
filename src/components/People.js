import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

function People(props) {
    const [names, setNames] = useState([])

    useEffect(() => {
      const a = axios.get(` https://api.themoviedb.org/3/person/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      a.then((b) => {
        console.log(b)
        setNames(b.data.results);
      })
  },[])
    return (
      <>
   <h1>Популярные люди</h1>
        <div className='d-flex justify-content-around flex-wrap'>
        {names.map(v => (
        <>
            <Card className="p-2 m-4 text:center" style={{ textDecoration: 'none', width: '13rem' }}>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'  + v.profile_path} />
              <Card.Body>
                <Card.Title  style={{ textDecoration: 'none',}}as={Link} to="/tv">{v.name}</Card.Title>
                <Card.Text >{v.original_name}</Card.Text>
                <strong>Извесность за:</strong>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
        </>
         ))}

</div>
      </>

    );         
}

export default People;