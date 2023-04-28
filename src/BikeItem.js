import React from "react";

function BikeItem({ bike, onBuyBike }) {
    const { id, name, brand, terrain, condition, price, image, user_id} = bike
    
    function handleBuyClick(id) {
        onBuyBike(id)
    }

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
            <button onClick={handleBuyClick}>Buy this bike!</button>

        </div>
    )
}

export default BikeItem