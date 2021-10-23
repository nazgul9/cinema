// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Cards from '../Cards';
// import { Container ,Row} from 'react-bootstrap';

// function Film(props) {
//   const [film, setFilm] = useState([])
  
//   useEffect(() => {
//     const b = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
//       b.then((c) => {
//         // console.log(c)
//         setFilm(c.data.results);
//       })
//   })

//   return (
//     <div>
//       <h1> Фильмы</h1>

//     <Cards  name={film}/>
//     </div>
//   );
// }

// export default Film;



import React, {Component} from 'react'
import axios from 'axios'
import Cards from '../Cards'
import {Button} from 'react-bootstrap'
 
export default class Film extends Component{
     
    state = {
      name: [],
      page: 1
    }
     
    componentDidMount() {
      this.setMovie()
       
    }
 
    setMovie = () => {
      this.setState({page: this.state.page + 1})
      axios.get(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`)
      .then((v)=>{
        console.log(v)
        this.setState((state) => {
          const a = v.data.results;
          return {name: a}
        });
        console.log(this.state.name)
      })
    }
  render(){
    return (
      <>
      <h1 className='tema'>Фильмы</h1>
        <Cards name={this.state.name}/>
        <Button className='zag' onClick={() => this.setMovie()}>Загрузить ещё</Button>
      </>
    )
  }
}