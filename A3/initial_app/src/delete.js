import React, { useState, useEffect } from "react";



const Delete = (props) => {
    const [productId, setProductId] = useState('');
    const [productInfo, setProductInfo] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
  
    function handleProductIdChange(event) {
      setProductId(event.target.value);
    }
  
    function handleFindProduct(event) {
      event.preventDefault();
      fetch(`/data/${productId}`)
        .then(response => response.json())
        .then(data => {
          setProductInfo(data);
          setSuccessMessage('');
        })
        .catch(error => console.error(error));
    }
  
    function handleDeleteProduct(event) {
      event.preventDefault();
      fetch(`/data/${productId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          setProductInfo(null);
          setSuccessMessage('Product has been successfully deleted.');
        })
        .catch(error => console.error(error));
    }
  
    return (
      <div>
        <div>
        <form onSubmit={handleFindProduct}>
          <label htmlFor="productIdInput">Enter Item ID:</label>
          <input id="productIdInput" type="text" value={productId} onChange={handleProductIdChange} />
          <button type="submit">Find Product</button>
        </form>
        {productInfo && (
          <div>
            <h2>Product Info:</h2>
            <p>ID: {productInfo._id}</p>
            <p>Name: {productInfo.name}</p>
            <p>Price: {productInfo.price}</p>
            <button onClick={handleDeleteProduct}>Delete Product</button>
          </div>
        )}
        {successMessage && <p>{successMessage}</p>}
      </div>
        <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>

    </div>

)



}

export default Delete;