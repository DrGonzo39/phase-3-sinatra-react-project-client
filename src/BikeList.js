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

   
    const bikesToDisplay = bikes.map((bike) => {
        return <BikeItem key={bike.id} bike={bike} />
    })

    return (
        <div>
        {bikesToDisplay}
        </div>
    )
};

export default BikeList; 