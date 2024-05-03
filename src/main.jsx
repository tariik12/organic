import ReactDOM from "react-dom/client";
import {  RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
// Import your router configuration




import { UsersProvider } from "./provider/UsersProvider/UsersProvider";


import { router } from "./provider/Route/Route";
import { ProductProvider } from "./provider/ItemProvider/ProductProvider";
import AuthProvider from "./provider/AuthProvider/AuthProvider";

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersProvider>
    <ProductProvider>
      
       
          
            <AuthProvider>
             
                {/* Render routes using the Routes and Route components */}
                <RouterProvider router={router} />
           
              <ToastContainer />
            </AuthProvider>
          
        
     
    </ProductProvider>
  </UsersProvider>
);
