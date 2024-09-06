 import React, {useEffect, useState} from 'react';
 import './App.css';
 function App() {
   const [products , setProducts] = useState([]);
   useEffect(() => {
     fetch('https://dummyjson.com/products')
     .then(response => response.json())
     .then(data => setProducts(data.products));
   },[]);
  
  return (
    <div className="App">
      <h1> Product List </h1>
      <table>
        <thead>
          <tr>
            <th> Product Name </th>
            <th> Description </th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
             <tr key ={product.id} >
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td> <img src = {product.thumbnail} alt ={product.title} width="100" /></td>
             </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
}
  
export default App;
