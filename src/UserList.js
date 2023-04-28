import React from "react";
import UserItem from "./UserItem";

function UserList({ users, onPurchase }) {
    
     // function handlePurchase(id) {
    //     fetch(`http://localhost:9292/bikes/${id}`, {
    //         method: "DELETE",
    //     })
    //     .then((r) => r.json())
    //     .then(() => {
    //         const updatedBikes = users.filter((user) => user.id !== id);
    //         onBuyClick(updatedBikes)
    //     })
    // }

    // function handleUpdateBike(id, price) {
    //     fetch(`http://localhost:9292/bikes/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //            price: price, 
    //         }),
    //     })
    //     .then((r) => r.json())
    //     .then((updatedBike) => setUsers(updatedBike))
    // };
    
    const usersToDisplay = users.map((user) => {
        return <UserItem 
                key={user.id} 
                user={user} 
                onPurchase={onPurchase}
                />
    })

    return (
        <div>
            {usersToDisplay}
        </div>
    )
}

export default UserList