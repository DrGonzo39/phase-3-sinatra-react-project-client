import React, { useState } from "react";

function NewUserForm({ onAddUser }) {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                rating: rating
            }),
        })
        .then((r) => r.json())
        .then((newUser) => onAddUser(newUser))
        setName("");
        setRating("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={rating} onChange={(e) => setRating(e.target.value)}/>
            <button type="submit">Create Your User Profile!</button>
        </form>
    )
}

export default NewUserForm;