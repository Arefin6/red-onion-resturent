import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
         <h2 style={{color:"red"}}>404! Page Not Found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
