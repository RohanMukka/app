import React from "react";
import "./style.css";
import LoginPage from './components/LoginPage';
import StudentHomePage from './compnents/StudentHomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={StudentHomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
