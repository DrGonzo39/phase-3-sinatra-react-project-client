import React, { useState } from "react";

function NewUserForm() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");

    return (
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={rating} onChange={(e) => setRating(e.target.value)}/>
            <button type="submit">Create Your User Profile!</button>
        </form>
    )
}

export default NewUserForm;