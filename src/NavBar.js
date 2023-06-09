import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
    return (
        <div>
            <NavLink to="/" 
                exact style={linkStyles}
                activeStyle={{
                    background: "darkred",
                }}>
                Home
            </NavLink>
            <NavLink to="/userform"
            exact style={linkStyles}
            activeStyle={{
                background: "darkred",
            }}>
            Create a User Profile
            </NavLink>
            <NavLink to="/bikeform"
                exact style={linkStyles}
                activeStyle={{
                    background: "darkred",
                }}>
                Post Your Bike     
            </NavLink>
            <NavLink to="/userlist" 
            exact style={linkStyles}
            activeStyle={{
                background: "darkred",
            }}>
            Sellers List     
            </NavLink>
        </div>
    )
}

export default NavBar;