import React, { useState, useEffect} from "react";
import UserItem from "./UserItem";

function UserList() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((data) => {
            setUsers(data);
        })
    }, [])

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