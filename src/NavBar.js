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
                    background: "darkgreen",
                }}>
                Home
            </NavLink>
            <NavLink to="/bikelist"
                exact style={linkStyles}
                activeStyle={{
                    background: "darkgreen",
                }}>
                View Bikes    
            </NavLink>
            <NavLink to="/bikeform"
                exact style={linkStyles}
                activeStyle={{
                    background: "darkgreen",
                }}>
                Post Your Bike     
            </NavLink>

        </div>
    )
}

export default NavBar;