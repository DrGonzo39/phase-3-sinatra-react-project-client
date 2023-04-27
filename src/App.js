import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import './App.css';
import BikeList from "./BikeList";
import BikeForm from "./BikeForm";
import NavBar from "./NavBar";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((data) => {
            setUsers(data);
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
        <BikeList />
        </Route> 
        <Route exact path="/bikeform">
        <BikeForm/>
        </Route>
        <Route exact path="/userlist">
        <UserList users={users}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
