import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import './App.css';
import BikeList from "./BikeList";
import BikeForm from "./BikeForm";
import NavBar from "./NavBar";

function App() {
  const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/bikes")
        .then((r) => r.json())
        .then((data) => {
            setBikes(data);
        })
    }, [])
  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/bikelist">
        <BikeList bikes={bikes}/>
        </Route> 
        <Route exact path="/bikeform">
        <BikeForm/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
