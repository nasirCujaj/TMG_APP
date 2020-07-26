import React, {Component} from 'react';
import './App.css';
import {Report} from './components/Report'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PersistentDrawerRight from './components/HomePage/SideDrawer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

        <Route path='/' component={PersistentDrawerRight} />
        <Route path='/report' component={Report} />

        </div>
      </Router>
      
    );
  }
}

export default App;
