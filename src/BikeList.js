import React, { useState, useEffect } from "react";
import BikeItem from "./BikeItem";

function BikeList() {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/bikes")
        .then((r) => r.json())
        .then((data) => {
            setBikes(data);
        })
    }, [])

    function handleBuyBike(id) {
        fetch(`http://localhost:9292/bikes/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            const updatedBikes = bikes.filter((bike) => bike.id !== id);
            setBikes(updatedBikes)
        })
    }

   
    const bikesToDisplay = bikes.map((bike) => {
        return <BikeItem key={bike.id} bike={bike} onBuyBike={handleBuyBike}/>
    })

    return (
        <div>
        {bikesToDisplay}
        </div>
    )
};

export default BikeList; 