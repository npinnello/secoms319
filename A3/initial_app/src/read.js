import React, { useState, useEffect } from "react";



const Read = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch('/all')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
    }, []);

return (

    <div>
        <div>
        <h1>Items in the Database</h1>
        {items.map(item => (
            <div key={item._id}>
            <h3>{item.Title}</h3>
            <p>Price: {item.Price}</p>
            <p>Description: {item.Description}</p>
            <p>Category: {item.Category}</p>
            <img src={item.image} alt={item.Title} />
            <p>Rating: {item.Rating.Stars} Stars ({item.Rating.Count} reviews)</p>
            </div>
        ))}
        </div>
        <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>

    </div>

)



}

export default Read;