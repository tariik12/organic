import React, { useContext, useState, useEffect } from "react";


import { ProductContext } from "../../../../provider/ItemProvider/ProductProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProductManger = () => {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  const [productss, setProducts] = useState([]);



  useEffect(() => {
    let filteredData = [...products]; // Ensure Products is used here

    if (searchQuery) {
      filteredData = filteredData.filter(
        (product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.parentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.madeIn.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProducts(filteredData);
  }, [products, searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div className="max-w-screen-xl mx-auto">
      <ToastContainer />
      <div className="flex items-end justify-between">
        <h1>Product List</h1>
        <div className="text-end">
          <p>Search</p>
          <input
            type="text"
            className="w-[120px]"
            name="searchInput"
            id="searchInput"
            onChange={handleSearch}
          />
        </div>
 
      </div>
      <div className="overflow-x-auto mt-5">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Type</th>
              <th>Made In</th>
              
              <th>Expire Date</th>
             
            </tr>
          </thead>
          <tbody>
            {productss.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.parentTitle}</td>
                <td>{product.type}</td>
                <td>{product.madeIn}</td>
                
                <td>
                  {new Date(product.expired).toLocaleDateString()}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProductManger;
