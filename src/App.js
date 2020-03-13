import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Navigation from './Navigation';
import {withAutorization} from './Autorization';
import {AutorizationProvider} from './Autorization';
// import {FirebaseProvider} from './Firebase';

function App() {
  return (
    <div className="App">
    <AutorizationProvider>
      <Router>
        <div>
          <Navigation/>
        </div>

        <Switch>
          <Route exact path="/">
            <Home title="Home"/>
          </Route>
          <Route path="/Signin">
            <Signin title="Sign In"/>
          </Route>
          <Route path="/Signup">
            <Signup title="Sign Up"/>
          </Route>
        </Switch>
      </Router>
      </AutorizationProvider>

    </div>  
  );
}

export default App;
