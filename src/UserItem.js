import React, { useState } from "react";

function UserItem() {
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
            {users.map((user) => {
                <div>
                <h1 className="user_name">{user.name}</h1>
                <p className="user_rating">{user.rating}</p> 
                </div>
            })}
        </div>
    )
}

export default UserItem;