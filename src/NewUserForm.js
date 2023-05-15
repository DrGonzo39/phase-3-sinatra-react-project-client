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
        <form className="new_user_form" onSubmit={handleSubmit}>
            <input className="new_user_text" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="What's your user name?"/>
            <input className="new_user_text" type="text" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="How would you rate your cycling experience?"/>
            <button className="new_user_submit" type="submit">Create Your User Profile!</button>
        </form>
    )
}

export default NewUserForm;