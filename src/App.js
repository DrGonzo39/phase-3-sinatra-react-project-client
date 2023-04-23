import React from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./Home";
import './App.css';
import BikeList from "./BikeList";
import UserForm from "./UserForm";
import NavBar from "./NavBar";

function App() {
  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/bikelist">
        <BikeList/>
        </Route> 
        <Route exact path="/userform">
        <UserForm/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
