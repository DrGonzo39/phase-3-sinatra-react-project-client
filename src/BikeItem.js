import React, { useState } from "react";

function BikeItem({ bike, onDeleteBike, onUpdateBike }) {
    const { id, name, brand, terrain, condition, price, image, user_id} = bike
    const [bid, setBid] = useState(price)

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/bikes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               price: bid, 
            }),
        })
        .then((r) => r.json())
        .then((updatedBike) => {
            onUpdateBike(updatedBike)
        });
    };

    function handleButtonClick() {
        onDeleteBike(bike)
    }
    
    return (
        <div className="bike_item">
            <h1 className="bike_header_text">{name}</h1>
            <h2 className="brand_text">Brand: {brand}</h2>
            <img className="bike_item_image" src={image} alt="thumbnail" />
            <p>ID: {id}</p>
            <p>Terrain: {terrain}</p>
            <p>Current Condition: {condition}</p>
            <form className="bid_submit_form" onSubmit={handleSubmit}>
                <input
                 type="number"
                 value={bid}
                 onChange={(e) => setBid(e.target.value)}
                />
                <input type="submit" value="Submit your bid!"/>
            </form>
            <p>Seller: {user_id}</p>
            <button onClick={handleButtonClick}>Buy this bike!</button>
        </div>
    )
}

export default BikeItem