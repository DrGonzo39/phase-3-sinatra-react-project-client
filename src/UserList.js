import React from "react";
import UserItem from "./UserItem";

function UserList({ users, onBikeDelete, onBikeUpdate }) {
 
    const usersToDisplay = users.map((user) => {
        return (
            <UserItem 
            key={user.id} 
            user={user} 
            onBikeDelete={onBikeDelete}
            onBikeUpdate={onBikeUpdate}
            />  
        )
    })

    return (
        <div>
            {usersToDisplay}
        </div>
    )
}

export default UserList