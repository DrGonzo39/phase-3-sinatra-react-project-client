import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import './App.css';
import BikeList from "./BikeList";
import BikeForm from "./BikeForm";
import NavBar from "./NavBar";
import UserList from "./UserList";

function App() {
  
  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/bikelist">
        <BikeList />
        </Route> 
        <Route exact path="/bikeform">
        <BikeForm/>
        </Route>
        <Route exact path="/userlist">
        <UserList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
