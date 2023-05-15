import React, { useState } from "react";

function BikeForm({ onAddBike }) {
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [terrain, setTerrain] = useState("")
    const [condition, setCondition] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [user_id, setUserId] = useState(0);


    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/bikes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                brand: brand,
                terrain: terrain,
                condition: condition,
                price: price,
                image: image,
                user_id: user_id
            }),
        })
        .then((r) => r.json())
        .then((newBike) => onAddBike(newBike))
        setName("");
        setBrand("");
        setTerrain("");
        setCondition("");
        setPrice("");
        setImage("");
        setUserId("")
    }

    return (
        <form className="new_bike_form" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Bike Name" className="new_bike_input"/>
            <input type="text" onChange={(e) => setBrand(e.target.value)} value={brand} placeholder="Brand" className="new_bike_input"/>
            <input type="text" onChange={(e) => setTerrain(e.target.value)} value={terrain} placeholder="Terrain" className="new_bike_input"/>
            <input type="text" onChange={(e) => setCondition(e.target.value)} value={condition} placeholder="Current Condition" className="new_bike_input"/>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Set Your Price" className="new_bike_input"/>
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Upload Image" className="new_bike_input"/>
            <input type="number" onChange={(e) => setUserId(e.target.value)} value={user_id} placeholder="What's your user id?" className="new_bike_input"/>
            <button className="new_bike_submit" type="submit">Upload Your Bike!</button>
        </form>
    )
}

export default BikeForm