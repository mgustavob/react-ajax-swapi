import React from 'react'
import { useLocation, useHistory } from 'react-router'

export default function StarShipPage (props) {
    const loc = useLocation();
    const hist = useHistory();
    function goHomePage() {
        hist.goBack()
    }
    function pilots (loc) {
        if (!loc.state.pilots.length) {
            return (
                <div>"No Pilots"</div>
            )
        } else {
            console.log(loc.state.pilots[0])
            let pilotList = loc.state.pilots.map((p, i)=>{
                return (
                    <div key={i}>{p.name}</div>
                )
            })
            console.log(pilotList)
            return pilotList
        }
    }
    return(
        <div className="ssContainer">
        <div className="sssResult" >
            Name: {loc.state.name}
            <div>
                Model: {loc.state.model}
            </div>
            <div>Pilots:{pilots(loc)}</div>
            <div>
                <button onClick={goHomePage}>RETURN</button>
            </div>
        </div>
        </div>
    )
}
