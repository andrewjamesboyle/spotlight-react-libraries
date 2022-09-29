import 'bulma/css/bulma.min.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { data } from './data';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Table from './component/Table/Table';

import './App.css';


ChartJS.register(ArcElement, Tooltip, Legend);


function App() {
  return (
    <div className="App">
      <header className='hero is-success'>This is a hero banner created in Bulma</header>
      <nav className="hero is-warning">
        <Link className="title is-3" to="/table">Table</Link>
        <Link className="title is-3" to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className="hero is-info">Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1 className="hero is-danger">2024 Presidential Poll</h1>
          <Doughnut data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
