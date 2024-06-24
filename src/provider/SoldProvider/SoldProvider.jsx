import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define the RegisterContext
export const SoldContext = createContext();

export const SoldProvider = ({ children }) => {
   
    const [myBoughtProduct, setMyBoughtProduct] = useState([]);
    const [allBoughtProduct, setAllBoughtProduct] = useState([]);

    console.log(myBoughtProduct, allBoughtProduct, "hello bouth")
    useEffect(() => {
       
        fetchBoughtProductAll();
        // Fetch subscribers for the logged-in user
        const memberData = JSON.parse(localStorage.getItem("memberData")); 
        const email = memberData?.email;
        if (email) {
            fetchBoughtProductMy(email);
        }
    }, []);

   
    const fetchBoughtProductAll = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}/api/bought-product-all`);
            setAllBoughtProduct(response.data);
        } catch (error) {
            console.error("Error fetching All registration information:", error);
            toast.warn("Failed to fetch All registration information. Please try again later.");
        }
    };

    const fetchBoughtProductMy = async (email) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}/my-bought-product/${email}`);
            setMyBoughtProduct(response.data);
        } catch (error) {
            console.error("Error fetching subscribers:", error);
            toast.warn("Failed to fetch subscribers. Please try again later.");
        }
    };

   


    return (
        // Provide value to RegisterContext
        <SoldContext.Provider value={{allBoughtProduct,myBoughtProduct  }}>
            {children}
        </SoldContext.Provider>
    );
};