import { useState, useEffect } from "react";
function App() {
const [product, setProduct] = useState([]);
const [viewer1, setViewer1] = useState(false);

return (
    <div>
    <h1>Catalog of Products</h1>
    <button onClick={() => getAllProducts()}>Show All products</button>
    <h1>Show all available Products.</h1>
    <hr></hr>
    {viewer1 && <div>Products {showAllItems}</div>}
    <hr></hr>
    </div>
    );

} // App end
export default App;

function getAllProducts() {
    fetch("http://localhost:4000/")
    .then((response) => response.json())
    .then((data) => {
    console.log("Show Catalog of Products :");
    console.log(data);
    setProduct(data);
    });
    setViewer1(!viewer1);
    }

    const showAllItems = product.map((el) => (
        <div key={el._id}>
        <img src={el.image} width={30} /> <br />
        Title: {el.title} <br />
        Category: {el.category} <br />
        Price: {el.price} <br />
        Rate :{el.rating.rate} and Count:{el.rating.count} <br />
        </div>
        ));