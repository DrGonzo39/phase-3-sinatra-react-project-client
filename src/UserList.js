import React from "react";
import UserItem from "./UserItem";

function UserList({ users, onPurchase, onUpdateBid }) {
 
    const usersToDisplay = users.map((user) => {
        return  <UserItem 
                 key={user.id} 
                 user={user} 
                 onPurchase={onPurchase}
                 onUpdateBid={onUpdateBid}
                />  
    })

    return (
        <div>
            {usersToDisplay}
        </div>
    )
}

export default UserList