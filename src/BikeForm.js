import React, { useState } from "react";

function BikeForm({ onAddBike }) {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        terrain: "",
        condition: "",
        price: "",
        image: "",
        user_id: 0
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
        <form onSubmit={handleSubmit}>
            
        </form>
    )
}

export default BikeForm