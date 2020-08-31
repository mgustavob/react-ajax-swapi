import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Starships from './Starships';
import StarShipPage from './StarShipPage';

function App() {
  return (
    <Router>
      {/* <switch> */}
      <div className="App">
        <nav>
          <Link to="/"><h1>Star Wars StarShips</h1></Link>
        </nav>
        <div className="spaceBet"></div>
        <Route exact path="/" component={Starships} />
        <Route path='/starship' render={({loc}) =>
              <StarShipPage loc={loc}/>
            }/>


      </div>

      {/* </switch> */}
    </Router>
  );
}

export default App;
