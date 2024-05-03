import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/get-user`);
      setUsers(response?.data );
      console.log(response?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUsers = async (newRegister) => {
    try {
      await axios.post(`${import.meta.env.VITE_URL}/register`, newRegister );
      
      fetchUsers();
      
      
        toast.success("Member added successfully");
      
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{users,addUsers}}>
      {children}
    </UserContext.Provider>
  );
};



