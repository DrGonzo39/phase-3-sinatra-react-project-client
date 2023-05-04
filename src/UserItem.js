import React from "react";
import BikeItem from "./BikeItem";

function UserItem({ user, onBikeDelete, onBikeUpdate }) {

    function handleDeleteBike(id) {
        fetch(`http://localhost:9292/bikes/${id}`, {
            method: "DELETE",
        });
        // onBikeDelete(id)
    }

    // function handleUpdateBike(updatedBike) {
    //     onBikeUpdate(updatedBike);
    // }

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
                            // onDeleteBike={handleDeleteBike}
                            // onUpdateBike={handleUpdateBike}
                            />
                })}
            </ul> 
        </div>
    )
}

export default UserItem;