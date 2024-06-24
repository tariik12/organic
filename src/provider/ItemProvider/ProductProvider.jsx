import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [products_approved, setProductsApproved] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [searchQuery, setSearchQuery] = useState("");
 
  const onAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product added to cart");
  };

  const onRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.info("Product removed from cart");
  };

  // New function for silent removal
  const onSilentRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    fetchProducts();
    fetchProductsApproved();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/get-product`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsApproved = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/get-product-approved`);
      setProductsApproved(response.data);
    } catch (error) {
      console.error("Error fetching approved products:", error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      await axios.post(`${import.meta.env.VITE_URL}/product-upload`, newProduct);
      fetchProducts();
      toast.success("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.patch(`${import.meta.env.VITE_URL}/updateProduct/${id}`, updatedProduct);
      fetchProducts();
      toast.success("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/deleteProduct/${id}`);
      fetchProducts();
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  const searchProduct = (product) =>{
    setSearchQuery(product)
  }
  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      searchProduct,
      updateProduct,
      deleteProduct,
      searchQuery,
      products_approved,
      onAddToCart,
      onRemoveFromCart,
      onSilentRemoveFromCart, // Provide the silent removal function
      setCart,
      cart
    }}>
      {children}
    </ProductContext.Provider>
  );
};
