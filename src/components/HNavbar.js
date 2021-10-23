import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
// import Janr from './Janr';

function HNavbar(props) {
  const [janry,setJanry] = useState([])
  useEffect(()=>{
      const d = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      d.then((s)=>{
          console.log(s)
    setJanry(s.data.genres)
  })
}, [])

  return (
  
    <div>
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/048b4913-5180-4a01-8b68-0b9f150c7dfb/d62y6x6-bf3bd4ad-f877-428f-bfdc-81cf62de45e9.png/v1/fill/w_640,h_366,strp/cinema_png_by_doloresminette_d62y6x6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY2IiwicGF0aCI6IlwvZlwvMDQ4YjQ5MTMtNTE4MC00YTAxLThiNjgtMGI5ZjE1MGM3ZGZiXC9kNjJ5Nng2LWJmM2JkNGFkLWY4NzctNDI4Zi1iZmRjLTgxY2Y2MmRlNDVlOS5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.unza0j4I0HzhDhbnnf_AsItBCA7qJs63mAD6_sFS4ZA"
            style={{
              widows: "50px",
              height: "50px",
              
            }} />
          <Navbar.Brand as={Link} to="/">
            Синематика
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Главная
              </Nav.Link>
              <Nav.Link as={Link} to="/film">
                Фильмы
              </Nav.Link>
              <Nav.Link as={Link} to="/serial">
                Сериалы
              </Nav.Link>
              <Nav.Link as={Link} to="/People">
                Люди
              </Nav.Link>
           
              <NavDropdown title="Жанры" id="collasible-nav-dropdown">
            
              {janry.map(v=>(
          <NavDropdown.Item  as={Link} to={`/janr/${v.id}`}>{v.name}
            </NavDropdown.Item>
              ))}
                 </NavDropdown>
                 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default HNavbar;