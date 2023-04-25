import React, { useState } from "react";

function BikeItem({ bike, onBuyBike, onUpdateBike }) {
    const { id, name, brand, terrain, condition, price, image, user_id} = bike
    const [bid, setBid] = useState(price)

    function handleBidChange(e) {
        onUpdateBike(setBid(e.target.value))
    }
    
    return (
        <div className="bike_item">
            <h1 className="bike_header_text">{name}</h1>
            <h2 className="brand_text">Brand: {brand}</h2>
            <img className="bike_item_image" src={image} alt="thumbnail" />
            <p>ID: {id}</p>
            <p>Terrain: {terrain}</p>
            <p>Current Condition: {condition}</p>
            <form> Current Bid:
                <input type="number" onChange={handleBidChange} value={bid} />
            </form>
            <p>Seller: {user_id}</p>
            <button onClick={() => onBuyBike}>Buy this bike!</button>

        </div>
    )
}

export default BikeItem