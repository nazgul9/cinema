import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
      {props.name.map(v => (
        <>
          <Row>
            <Card as={Link} to={`/Tv/${v.id}`} className="p-2 m-4 text-center" style={{ textDecoration: 'none', width: '13rem' }}>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' +v.poster_path} />
              <Card.Body>
                <Card.Title style={{ textDecoration: 'none',}}>{v.title}</Card.Title>
                <Card.Text >{v.name}</Card.Text>
                <Card.Text>{v.first_air_date}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </>
      ))}
    </div>
  );
}

export default Cards;