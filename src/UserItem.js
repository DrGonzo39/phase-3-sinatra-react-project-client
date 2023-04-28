import React from "react";
import BikeItem from "./BikeItem";

function UserItem({ user, onPurchase }) {

    function handleBuyBike(id) {
        onPurchase(id)
    }

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
    
    return (
        <div>
            <h1 className="user_name">{user.name}</h1>
            <p>Seller ID: {user.id}</p>
            <p className="user_rating">{user.rating}</p>
            <ul>
                {user.bikes.map((bike) => {
                    return <BikeItem 
                            key={bike.id} 
                            bike={bike}
                            onBuyBike={handleBuyBike}
                            />
                })}
            </ul> 
        </div>
    )
}

export default UserItem;