import React, { useState, useEffect } from "react";



const Update = (props) => {

    const [itemId, setItemId] = useState('');
    const [item, setItem] = useState({});
    const [newPrice, setNewPrice] = useState('');
  
    const handleIdChange = (event) => {
      setItemId(event.target.value);
    };
  
    const handleGetItem = () => {
      fetch(`/data/${itemId}`)
        .then(response => response.json())
        .then(data => {
          setItem(data);
          setNewPrice(data.price);
        })
        .catch(error => console.error(error));
    };
  
    const handlePriceChange = (event) => {
      setNewPrice(event.target.value);
    };
  
    const handleUpdatePrice = () => {
      fetch(`/data/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price: newPrice })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    };
  
    return (
      <div>
        <div>
        <label htmlFor="itemId">Enter Item ID:</label>
        <input type="text" id="itemId" name="itemId" value={itemId} onChange={handleIdChange} />
  
        <button onClick={handleGetItem}>Get Item</button>
  
        {item._id &&
          <div>
            <p>Current Price: {item.price}</p>
  
            <label htmlFor="newPrice">New Price:</label>
            <input type="text" id="newPrice" name="newPrice" value={newPrice} onChange={handlePriceChange} />
  
            <button onClick={handleUpdatePrice}>Update Price</button>
          </div>
        }
      </div>
            <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>
        </div>

)



}

export default Update;