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
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>2024 Presidential Poll</h1>
          <Doughnut data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
