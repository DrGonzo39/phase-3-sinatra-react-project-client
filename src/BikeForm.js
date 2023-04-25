import React, { useState } from "react";

function BikeForm({ onAddBike }) {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        terrain: "",
        condition: "",
        price: 0,
        image: "",
    })

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/bikes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                formData
            }),
        })
        .then((r) => r.json())
        .then((newBike) => onAddBike(newBike))
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    return (
        <form className="new_bike_form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={formData.name} placeholder="Bike Name" />
            <input type="text" onChange={handleChange} value={formData.brand} placeholder="Brand"/>
            <input type="text" onChange={handleChange} value={formData.terrain} placeholder="Terrain"/>
            <input type="text" onChange={handleChange} value={formData.condition} placeholder="Current Condition"/>
            <input type="number" onChange={handleChange} value={formData.price} placeholder="Set Your Price"/>
            <input type="text" onChange={handleChange} value={formData.image} placeholder="Upload Image"/>
            <button type="submit">Upload Your Bike!</button>
        </form>
    )
}

export default BikeForm