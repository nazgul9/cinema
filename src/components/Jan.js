import React, {useState, useEffect,} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import Cards from '../Cards'

export default function Jan() {
    let {id} = useParams();
    const [dog, setDog] = useState([])
    useEffect(()=>{
        const f =axios.get( `https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
        f.then((e)=>{
            console.log(e)
            setDog(e.data.results)
        }) 
    }, [id] )
    return (
        <div>
            <Cards name={dog}/>
        </div>
    )}