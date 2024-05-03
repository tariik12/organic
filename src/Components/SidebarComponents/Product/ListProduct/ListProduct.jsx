import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import PDFDownload from "../../../Shared/PDFDownload/PDFDownload";
import { ProductContext } from "../../../../provider/ItemProvider/ProductProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProduct = () => {
  const { Products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState({});
  const [products, setProducts] = useState([]);

  // Extract unique roles from products
  const uniqueRoles = [...new Set(products.map((product) => product.role))];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/get-product`);
      setProducts(response.data);
      setSelectedRole(
        Object.fromEntries(
          response.data.map((product) => [product.id, product.role || ""])
        )
      );
      setIsButtonDisabled(
        Object.fromEntries(
          response.data.map((product) => [product.id, product.role === ""])
        )
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleUpdateRole = async (id) => {
    try {
      const role = selectedRole[id];
      await axios.patch(`${import.meta.env.VITE_URL}/update-product/${id}`, {
        role,
      });
      fetchProducts();
      setSelectedRole((prevState) => ({ ...prevState, [id]: "" }));
      setIsButtonDisabled((prevState) => ({ ...prevState, [id]: true }));
      console.log("Role Update Success");
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_URL}/deleteProduct/${id}`);
      if (response.data === "Product and image deleted") {
        fetchProducts();
        toast.success("Product deleted successfully");
      } else {
        console.error("Error deleting product:", response.data);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleRoleChange = (e, id) => {
    const value = e.target.value;
    setSelectedRole((prevState) => ({ ...prevState, [id]: value }));
    setIsButtonDisabled((prevState) => ({ ...prevState, [id]: value === "" }));
  };

  useEffect(() => {
    let filteredData = [...products];

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
          Products={products}
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
              <th>Image</th>
              <th>Expire Date</th>
              <th>Role</th>
              <th>Actions</th>
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
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {product.role}
                  </span>
                </td>
                <td>
                  {new Date(product.expired).toLocaleDateString()}
                </td>
                <td>
                  <select
                    value={selectedRole[product.id] || ""}
                    onChange={(e) => handleRoleChange(e, product.id)}
                    className="block p-0 focus:ring-white focus:border-white sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="">Select Role</option>
                    {uniqueRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdateRole(product.id)}
                    className={`
                      ${isButtonDisabled[product.id]
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600"
                      }
                    `}
                    disabled={isButtonDisabled[product.id]}
                  >
                    Update Role
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;