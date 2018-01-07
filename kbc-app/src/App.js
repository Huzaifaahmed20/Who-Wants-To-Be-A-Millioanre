import React, { Component } from 'react';
import './App.css';
import {
  Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// import firebase from 'firebase'
import Signup from './myComponents/Signup';
import Mainpage from './myComponents/Mainpage';
import login from './myComponents/login';
import SignUpOrLogin from './myComponents/SignUpOrLogin';
import Dashboard from './myComponents/Dashboard';
const customHistory = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        
              <div>
              <Route exact path="/" component={Mainpage} />
              <Route path = "/Signuporlogin" component={SignUpOrLogin}/> 
              {/* <Route path = "/login" component={login}/>
              <Route path="/Signup" component={Signup} /> */}
              <Route path="/Dashboard" component={Dashboard}/>
              </div>
          

      </Router>
    );
  }
}

export default App;
