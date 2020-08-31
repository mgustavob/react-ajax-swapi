import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Link
  } from 'react-router-dom'



export default function Starships() {
    let [starShip, setStarShip] = useState([])

    useEffect(()=>{
        let url = "https://swapi.dev/api/starships/"
        axios.get(url)
        .then(res=>{
            console.log(res.data.results)
            setStarShip(res.data.results)
        })
        .catch(err => console.log(err))

    }, [])

    if(!starShip.length) {
        return <div>Loading</div>
    }

    starShip = starShip.map((s, i)=> {
        return (
            <div key={i} className="ssResult" id="{i}">
                <Link to={{
                    pathname:'starship',
                    state: s
                }}key={s.name}>
                    <div><p>{s.name}</p></div>
                </Link>
                </div>

        )
    })


    return(
        <div>
            <div className="ssContainer">
             {starShip}
            </div>
        </div>
    )
}
