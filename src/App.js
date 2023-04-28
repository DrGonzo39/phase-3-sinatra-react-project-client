import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import './App.css';
import BikeForm from "./BikeForm";
import NavBar from "./NavBar";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setUsers(data)
        })
    }, [])

    function handleAddBike(newBike) {
      setUsers(...users, newBike)
    }

    function handleBikePurchase(id) {
      const updatedBikes = users.filter((user) => user.id !== id);
        setUsers(updatedBikes)
    }

    function handleNewBid(updatedUser) {
      const updatedUsers = users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
    }

  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/bikeform">
        <BikeForm onAddBike={handleAddBike}/>
        </Route>
        <Route exact path="/userlist">
        <UserList users={users} onPurchase={handleBikePurchase} onUpdateBid={handleNewBid}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
