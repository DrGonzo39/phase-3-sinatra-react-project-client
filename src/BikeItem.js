import React from "react";

function BikeItem({ bike, onBuyBike, onUpdateBike }) {
    const { name, brand, terrain, condition, price, image, user} = bike

    return (
        <div className="bike_item">
            <h1 className="bike_header_text">{name}</h1>
            <h2 className="brand_text">Brand: {brand}</h2>
            <img className="bike_item_image" src={image} alt="thumbnail" />
            <p>Terrain: {terrain}</p>
            <p>Current Condition: {condition}</p>
            <h3> Current Bid:
                <input type="text" onChange={onUpdateBike} value={price} />
            </h3>
            <p>Seller: {user.name}</p>
            <button onClick={() => onBuyBike}>Buy this bike!</button>

        </div>
    )
}

export default BikeItem