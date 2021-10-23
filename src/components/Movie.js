// import React, { useEffect,useState } from 'react';
// import {Link} from 'react-router-dom'
// import axios from 'axios';
// import {Card} from "react-bootstrap"

// function Movie(props) {
//     const [names, setNames] = useState([])

//     useEffect(()=>{
//         const a = axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`)
//         a.then((s)=>{
//             console.log(s);
//         setNames(s.data);

//         })
//     })
//     return (
//         <div className='d-flex justify-content-around flex-wrap'>
//         {names.map(v => (
//         <>
//               <Card className="p-2 m-4 text:center" style={{ textDecoration: 'none', width: '13rem' }}>
//               <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'  + v.homepage} />
//               <Card.Body>
//                 <Card.Title  style={{ textDecoration: 'none',}}as={Link} to="/tv">{v.title}</Card.Title>
//                 <Card.Text >{v.tagline}</Card.Text>
                
//                 <Card.Text>{v.overview}</Card.Text>
//                 {/* <Card.Text>{v.overview}</Card.Text> */}
//               </Card.Body>
//             </Card>
//         </>
//          ))}

// </div>
//     );
// }

// export default Movie;



// import React, {Component} from 'react'
// import axios from 'axios'
// import Cards from '../Cards'
// import {Button} from 'react-bootstrap'
 
// export default class Movie extends Component{
     
//     state = {
//       name: [],
//       page: 1
//     }
     
//     componentDidMount() {
//       this.setMovie()
       
//     }
 
//     setMovie = () => {
//       this.setState({page: this.state.page + 1})
//       axios.get(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`)
//       .then((v)=>{
//         console.log(v)
//         this.setState((state) => {
//           const a = v.data.results;
//           return {name: a}
//         });
//         console.log(this.state.name)
//       })
//     }
//   render(){
//     return (
//       <>
//       <h1 className='tema'>Фильмы</h1>
//         <Cards name={this.state.name}/>
//         <Button className='zag' onClick={() => this.setMovie()}>Загрузить ещё</Button>
//       </>
//     )
//   }
// }