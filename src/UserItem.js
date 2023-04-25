import React from "react";

function UserItem({ user }) {
    
    return (
        <div>
            <h1 className="user_name">{user.name}</h1>
            <p>Seller ID: {user.id}</p>
            <p className="user_rating">{user.rating}</p> 
        </div>
    )
}

export default UserItem;