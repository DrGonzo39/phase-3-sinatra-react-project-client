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
    console.log(users)
  }, [users])
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setUsers(data)
        })
    }, [])

    function handleUpdateBike(updatedBike) {
    // find user that updatedBike belongs to and save to variable
      const userToUpdate = users.find((user) => user.id === updatedBike.user_id)
    // iterate over that users bikes
      const updatedUser = userToUpdate.bikes.map((bike) => {
        if (bike.id === updatedBike.id) {
          return updatedBike
        } else {
          return bike;
        }
      });
      handleUpdateUser(updatedUser);
      // if a bikes id === the updatedBike id
      // return the updatedBike
        // else
      // return the bike
      // invoke handleUpdateUser
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
        <Route exact path="/bikeform">
        <BikeForm onAddBike={handleAddBike}/>
        </Route>
        <Route exact path="/userlist">
        {/* <UserList users={users} onPurchase={handleBikeDelete} onBikeUpdate={handleBikeUpdate}/>  */}
        <UserList users={users} onBikeUpdate={handleUpdateBike} onBikeDelete={handleBikeDelete} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
