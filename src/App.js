import React from 'react' ;
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;
import Home from './pages/index';
import signIn from './pages/signIn';
import User from './components/User' ;
import Admin from './components/admin' ;


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={signIn} exact />
          <Route path="/user" component={User} exact />
          <Route path="/admin" component={Admin} exact />
        </Switch>
      </Router>
  );
}

export default App;
