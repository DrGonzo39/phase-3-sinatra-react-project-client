import React from "react";
import BikeItem from "./BikeItem";

function BikeList({ bikes }) {
    

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

    function handleUpdateBike() {
        fetch(`http://localhost:9292/bikes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               price: price 
            })
            .then((r) => r.json())
            .then((updatedBike) => setBikes(updatedBike))
        })
    };

   
    const bikesToDisplay = bikes.map((bike) => {
        return <BikeItem key={bike.id} bike={bike} onBuyBike={handleBuyBike} onUpdateBike={handleUpdateBike}/>
    })

    return (
        <div>
        {bikesToDisplay}
        </div>
    )
};

export default BikeList; 