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

    function handleNameChange(e) {
        setName(e.target.value) 
    }

    function handleBrandChange(e) {
        setBrand(e.target.value)
    }

    function handleTerrainChange(e) {
        setTerrain(e.target.value)
    }

    function handleConditionChange(e) {
        setCondition(e.target.value)
    }

    function handlePriceChange(e) {
        setPrice(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handleUserId(e) {
        setUserId(e.target.value)
    }

    return (
        <form className="new_bike_form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleNameChange} value={name} placeholder="Bike Name" />
            <input type="text" onChange={handleBrandChange} value={brand} placeholder="Brand"/>
            <input type="text" onChange={handleTerrainChange} value={terrain} placeholder="Terrain"/>
            <input type="text" onChange={handleConditionChange} value={condition} placeholder="Current Condition"/>
            <input type="number" onChange={handlePriceChange} value={price} placeholder="Set Your Price"/>
            <input type="text" onChange={handleImageChange} value={image} placeholder="Upload Image"/>
            <input type="number" onChange={handleUserId} value={user_id} placeholder="What's your user id?" />
            <button type="submit">Upload Your Bike!</button>
        </form>
    )
}

export default BikeForm