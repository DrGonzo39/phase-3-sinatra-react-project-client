import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import './App.css';
import BikeForm from "./BikeForm";
import NavBar from "./NavBar";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";

function App() {
  const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((data) => {
          setUsers(data);
        })
    }, [])

    function handleAddUser(newUser) {
      setUsers([...users, newUser]);
    }

    function handleUpdateBike(updatedBike) {
      const userToUpdate = users.find((user) => user.id === updatedBike.user_id)
      const updatedUsersbikes = userToUpdate.bikes.map((bike) => {
        if (bike.id === updatedBike.id) {
          return updatedBike
        } else {
          return bike;
        }
      });
      handleUpdateUser(updatedUsersbikes);
    }

    function handleAddBike(newBike) {
      const userToUpdate = users.find((user) => user.id === newBike.user_id)
      const updatedUser = userToUpdate.bikes.push(newBike)
      handleUpdateUser(updatedUser);
    }

    function handleBikeDelete(bike) {
      const userToUpdate = users.find((user) => user.id === bike.user_id);
      const updatedBikes = userToUpdate.bikes.filter((updatedBike) => updatedBike.id !== bike.id)
      userToUpdate.bikes = updatedBikes;
      handleUpdateUser(userToUpdate)
    }

    function handleUpdateUser(updatedUser) {
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
        <Route exact path="/userform">
          <NewUserForm onAddUser={handleAddUser}/>
        </Route>
        <Route exact path="/bikeform">
        <BikeForm onAddBike={handleAddBike}/>
        </Route>
        <Route exact path="/userlist">
        <UserList users={users} onBikeUpdate={handleUpdateBike} onBikeDelete={handleBikeDelete} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
