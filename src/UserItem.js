import React from "react";

function UserItem({ user }) {
    
    return (
        <div>
            <h1 className="user_name">{user.name}</h1>
            <p className="user_rating">{user.rating}</p> 
        </div>
    )
}

export default UserItem;