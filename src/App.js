import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import Cloth from './components/Type/Cloth'
import Vegetable from './components/Type/Vegetable'
import Fastfood from './components/Type/Fastfood'
import Grocery from './components/Type/Grocery'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/vegetable' component={Vegetable} />
      <Route path='/fastfood' component={Fastfood} />
      <Route path='/grocery' component={Grocery} />
      <Route path='/cloth' component={Cloth} />
    </Router>
  );
}

export default App;
