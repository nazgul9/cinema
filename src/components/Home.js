import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import Cards from '../Cards'
export default function Home(props) {
  const [name, setName] = useState([])
  const [tv1, setTv1] = useState('tv');
  const [names, setNames] = useState([])
  const [w1, setW1] = useState('w');

  useEffect(() => {
    if (tv1 === 'tv') {
      const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      a.then((s) => {
        console.log(s)
        setName(s.data.results)
      })
    } else {
      const b = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      b.then((c) => {
        console.log(c)
        setName(c.data.results);
      })
    }
  }, [tv1])

  useEffect(() => {
    if (w1 === 'w') {
      const aa = axios.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU
      `);
      aa.then((ss) => {
        console.log(ss)
        setNames(ss.data.results)
      })
    } else {
      const bb = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      bb.then((cc) => {
        console.log(cc)
        setNames(cc.data.results);
      })
    }
  }, [w1])
  return (
    <>
      <div className='mt-3 d-flex justify-content-between'>
        <span className="justify-content- end" style={{ fontSize: 30 }}>Что Популярно</span>
        <ButtonGroup aria-label="Basic example">
          <Button variant={tv1 == 'tv' ? 'primary' : 'secondary'} onClick={() => setTv1('tv')}>По ТВ</Button>
          <Button variant={tv1 !== 'tv' ? 'primary' : 'secondary'} onClick={() => setTv1('cinemas')}>В кинотеатрах</Button>
        </ButtonGroup>
      </div>
      <Cards name={name} />

      <div className='mt-3 d-flex justify-content-between'>
        <span style={{ fontSize: 30 }}>Что в тренде</span>
        <ButtonGroup aria-label="Basic example">
          <Button variant={w1 == 'w' ? 'primary' : 'secondary'} onClick={() => setW1('w')}>Сегодня</Button>
          <Button variant={w1 !== 'w' ? 'primary' : 'secondary'} onClick={() => setW1('cin')}>На этой недели</Button>
        </ButtonGroup>
      </div>
      <Cards name={names} />
    </>
  )
}