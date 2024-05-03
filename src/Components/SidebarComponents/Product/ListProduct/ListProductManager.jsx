import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import PDFDownload from "../../../Shared/PDFDownload/PDFDownload";
import { ProductContext } from "../../../../provider/ItemProvider/ProductProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProductManger = () => {
  const { Products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState({});
  const [products, setProducts] = useState([]);

  const handleRoleChange = (e, id) => {
    const value = e.target.value;
    setSelectedRole((prevState) => ({ ...prevState, [id]: value }));
    setIsButtonDisabled((prevState) => ({ ...prevState, [id]: value === "" }));
  };

  useEffect(() => {
    let filteredData = [...Products]; // Ensure Products is used here

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
  }, [Products, searchQuery]);

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
        <PDFDownload
          Products={Products}
          selectedProperties={[
            "productName",
            "parentTitle",
            "type",
            "madeIn",
          ]}
          propertyDisplayNames={{
            productName: "Name",
            parentTitle: "Category",
            type: "Type",
            madeIn: "Made In",
          }}
          fileName="Stock Balance"
        />
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
            {products.map((product, index) => (
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
