import React, { useState, useEffect} from "react";
import BikeItem from "./BikeItem";

function BikeList({ users, setUsers }) {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/bikes")
        .then((r) => r.json())
        .then((data) => {
            setBikes(data);
        })
    }, [])
    

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

    function handleUpdateBike(id, price) {
        fetch(`http://localhost:9292/bikes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               price: price, 
            }),
        })
        .then((r) => r.json())
        .then((updatedBike) => setBikes(updatedBike))
    };

   
    const bikesToDisplay = bikes.map((bike) => {
        return <BikeItem key={bike.id} bike={bike} onUpdateBike={handleUpdateBike}/>
    })

    return (
        <div>
        {bikesToDisplay}
        </div>
    )
};

export default BikeList; 