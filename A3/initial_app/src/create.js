import React, { useState, useEffect } from "react";



const Create = (props) => {

    const [formData, setFormData] = useState({
        _id: "",
        Title: "",
        Price: "",
        Description: "",
        Category: "",
        image: "",
        Rating: {
            Stars: "",
            Count: ""
        },
      });
    
      const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        props.handleCreateSubmit(formData);
      };


return (

    <div>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type="text"
            name="_id"
            value={formData._id}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
          Title:
          <input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
          Price:
          <input
            type="text"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
        Description:
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
        Category:
          <input
            type="text"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
        image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label> <br/>
        <label>
        Rating <br/> 
        Stars:
          <input
            type="text"
            name="Rating.Stars"
            value={formData.Rating.Stars}
            onChange={handleChange}
          />
        Count:
        <input
            type="text"
            name="Rating.Counts"
            value={formData.Rating.Count}
            onChange={handleChange}
          />
        </label> <br/>
        <input type="submit" value="Submit" />
      </form>
        <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>

    </div>

)
}
export default Create;