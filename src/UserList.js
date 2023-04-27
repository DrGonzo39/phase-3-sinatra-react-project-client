import React from "react";
import UserItem from "./UserItem";

function UserList({ users }) {
      
    const usersToDisplay = users.map((user) => {
        return <UserItem key={user.id} user={user} />
    })

    return (
        <div>
            {usersToDisplay}
        </div>
    )
}

export default UserList