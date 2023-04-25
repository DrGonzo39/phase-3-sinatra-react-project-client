import React, { useState } from "react";

function BikeForm({ onAddBike }) {
    const [fromData, setFormData] = useState({
        name: "",
        brand: "",
        terrain: "",
        condition: "",
        price: "",
        image: "",
        user_id: 0
    })
}

export default BikeForm