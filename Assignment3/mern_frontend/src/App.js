import { useState, useEffect } from "react";
function App() {
  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [viewer2, setViewer2] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [index, setIndex] = useState(0);

  const [addNewProduct, setAddNewProduct] = useState({
    _id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:3000/images/",
    rating: { rate: 0.0, count: 0 },
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: value });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: value });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({ ...addNewProduct, rating: { rate: value } });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: value },
      });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:3000/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }

  function getAllProducts() {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }

  useEffect(() => {
    getAllProducts();
  }, [checked4]);

  function getOneByOneProductNext() {
    if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function getOneByOneProductPrev() {
    if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:3000/delete/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
    setChecked4(!checked4);
  }

  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:3000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
      setViewer2(!viewer2);
    } else {
      console.log("Wrong number of Product id.");
    }
  }

  const showOneItem = oneProduct.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={30} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rate :{el.rating.rate} and Count:{el.rating.count} <br />
    </div>
  ));
  
  

  return (
    <div>
      <h1>Catalog of Products</h1>
      <button onClick={() => getAllProducts()}>Show All users</button>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="id"
        onChange={(e) => getOneProduct(e.target.value)}
      />
      <div>
        <h3>Show all available Products.</h3>
      </div>
      <div>
        <h3>Show one Product by Id:</h3>
      </div>
      <div>
        <h3>Add a new product :</h3>

        <div>
          <form action="">
            <input
              type="number"
              placeholder="id?"
              name="_id"
              value={addNewProduct._id}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="title?"
              name="title"
              value={addNewProduct.title}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="price?"
              name="price"
              value={addNewProduct.price}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="description?"
              name="description"
              value={addNewProduct.description}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="category?"
              name="category"
              value={addNewProduct.category}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="image?"
              name="image"
              value={addNewProduct.image}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="rate?"
              name="rate"
              value={addNewProduct.rating.rate}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="count?"
              name="count"
              value={addNewProduct.rating.count}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleOnSubmit}>
              submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <h3>Delete one product:</h3>

        <div>
          <input
            type="checkbox"
            id="acceptdelete"
            name="acceptdelete"
            checked={checked4}
            onChange={(e) => setChecked4(!checked4)}
          />
          <button onClick={() => getOneByOneProductPrev()}>Prev</button>
          <button onClick={() => getOneByOneProductNext()}>Next</button>
          <button onClick={() => deleteOneProduct(product[index]._id)}>
            Delete
          </button>
          {checked4 && (
            <div key={product[index]._id}>
              <img src={product[index].image} width={30} /> <br />
              Id:{product[index]._id} <br />
              Title: {product[index].title} <br />
              Category: {product[index].category} <br />
              Price: {product[index].price} <br />
              Rate :{product[index].rating.rate} and Count:
              {product[index].rating.count} <br />
            </div>
          )}
        </div>
      </div>
    </div>
  ); // return end
} // App end
export default App;
