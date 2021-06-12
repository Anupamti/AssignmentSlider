import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageOne from './Component/PageOne/PageOne';
import PageTwo from './Component/PageTwo/PageTwo';
import NavBar from './Component/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/PageTwo" component={PageTwo} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
