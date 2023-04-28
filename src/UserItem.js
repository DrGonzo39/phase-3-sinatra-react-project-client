import React from "react";
import BikeItem from "./BikeItem";

function UserItem({ user }) {
    
    return (
        <div>
            <h1 className="user_name">{user.name}</h1>
            <p>Seller ID: {user.id}</p>
            <p className="user_rating">{user.rating}</p>
            <ul>
                {user.bikes.map((bike) => {
                    return <BikeItem key={bike.id} bike={bike}/>
                })}
            </ul> 
        </div>
    )
}

export default UserItem;