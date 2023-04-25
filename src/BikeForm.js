import React, { useState } from "react";

function BikeForm({ onAddBike }) {
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [terrain, setTerrain] = useState("")
    const [condition, setCondition] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/bikes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                barnd: brand,
                terrain: terrain,
                condition: condition,
                price: price,
                image: image
            }),
        })
        .then((r) => r.json())
        .then((newBike) => onAddBike(newBike))
    }

    function handleNameChange(e) {
        setName(e.target.value) 
    }

    function handleBrandChange(e) {
        setBrand(e.target.value)
    }

    

    return (
        <form className="new_bike_form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleNameChange} value={name} placeholder="Bike Name" />
            <input type="text" onChange={handleBrandChange} value={brand} placeholder="Brand"/>
            <input type="text" onChange={handleChange} value={terrain} placeholder="Terrain"/>
            <input type="text" onChange={handleChange} value={condition} placeholder="Current Condition"/>
            <input type="number" onChange={handleChange} value={price} placeholder="Set Your Price"/>
            <input type="text" onChange={handleChange} value={image} placeholder="Upload Image"/>
            <button type="submit">Upload Your Bike!</button>
        </form>
    )
}

export default BikeForm