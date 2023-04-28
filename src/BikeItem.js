import React from "react";

function BikeItem({ bike }) {
    const { id, name, brand, terrain, condition, price, image, user_id} = bike
    
    // function handleBuyBike(id) {
    //     fetch(`http://localhost:9292/bikes/${id}`, {
    //         method: "DELETE",
    //     })
    //     .then((r) => r.json())
    //     .then(() => {
    //         const updatedBikes = users.filter((user) => user.id !== id);
    //         setUsers(updatedBikes)
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
    
    return (
        <div className="bike_item">
            <h1 className="bike_header_text">{name}</h1>
            <h2 className="brand_text">Brand: {brand}</h2>
            <img className="bike_item_image" src={image} alt="thumbnail" />
            <p>ID: {id}</p>
            <p>Terrain: {terrain}</p>
            <p>Current Condition: {condition}</p>
            <p> Price: {price}</p>
            <p>Seller: {user_id}</p>
            <button>Buy this bike!</button>

        </div>
    )
}

export default BikeItem