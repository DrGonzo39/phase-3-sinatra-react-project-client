import React from "react";
import BikeItem from "./BikeItem";

function UserItem({ user, onBikeDelete, onBikeUpdate }) {

    function handleDeleteBike(bike) {
        fetch(`http://localhost:9292/bikes/${bike.id}`, {
            method: "DELETE",
        });
        onBikeDelete(bike);
    }

    function handleUpdate(updatedBike) {
        onBikeUpdate(updatedBike);
    }

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
                            onDeleteBike={handleDeleteBike}
                            onUpdateBike={handleUpdate}
                            />
                })}
            </ul> 
        </div>
    )
}

export default UserItem;