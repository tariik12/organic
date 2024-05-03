// QuantityUpdates.jsx
import React, { useContext, useState, useEffect } from "react";
import PDFDownload from "../../../Shared/PDFDownload/PDFDownload";
import { ProductContext } from "../../../../provider/ItemProvider/ProductProvider";
import Modal from "../Modal/Modal";
import QuantityUpdateForm from "../FormModal/QuantityUpdateForm";
import { MdDeleteSweep } from 'react-icons/md';

const QuantityUpdates = () => {
  const { Products, deleteProduct } = useContext(ProductContext);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setData(Products);
  }, [Products]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = (productIdToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      deleteProduct(productIdToDelete);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex Products-end justify-between">
        <h1>Update Product Quantity</h1>
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
          Products={data}
          selectedProperties={["productName", "parentTitle", "type", "madeIn", "quantity"]}
          propertyDisplayNames={{
            productName: "Name",
            parentTitle: "Category",
            type: "Type",
            madeIn: "Made In",
            quantity: "Quantity"
          }}
          fileName="Unit List"
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
              
              <th>Update Quantity</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.parentTitle}</td>
                <td>{product.type}</td>
                <td>{product.madeIn}</td>
               
                <td>
                  <button onClick={() => openModal(product)}>Update</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
          {/* Pass selected Product and close modal function to the modal component */}
          <QuantityUpdateForm selectedProduct={selectedProduct} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default QuantityUpdates;
