import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../../Pages/Dashboard/Dashboard";
import Error from "../../../Error/Error";
import DashboardInventory from "../../Pages/Dashboard/DashboardInventory";

import InProgressPage from "../../Pages/InProgressPage/InProgressPage";
import MainLayout from "../../Pages/Main/MainLayout/MainLayout";
import Home from "../../Pages/Main/Home/Home";
import FoodDetails from "../../Pages/Main/FoodDetails/FoodDetails";
import Login from "../../Components/Shared/Login/Login";
import Register from "../../Components/Shared/Register/Register";

import QuantityUpdates from "../../Components/SidebarComponents/Product/QuantityUpdates/QuantityUpdates";
import AddProducts from "../../Components/SidebarComponents/Product/AddProduct";
import ListProduct from "../../Components/SidebarComponents/Product/ListProduct/ListProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PaymentSuccess from "../../Components/Payment/PaymentSuccess";
import Payment from "../../Components/Payment/Payment";
import PaymentHistory from "../../Components/Payment/PaymentHistory";
import ManageUser from "../../Components/SidebarComponents/Users/ManageUser/ManageUser";
import ListProductManger from "../../Components/SidebarComponents/Product/ListProduct/ListProductManager";
import ViewCart from "../../Components/ViewCart/ViewCart";
import Checkout from "../../Components/Checkout/Checkout";
import ProductList from "../../Pages/Main/ProductList/ProductList";
import ProductCategory from "../../Components/Home/ProductCategory/ProductCategory";
import Contact from "../../Pages/Contact/Contact";
import TermAndPolicy from "../../Pages/TermAndPolicy/TermAndPolicy";
import WarrantyPolicy from "../../Pages/WarrantyPolicy/WarrantyPolicy";
import Profile from "../../Components/SidebarComponents/Profile/Profile";
import MyBoughtProduct from "../../Components/SidebarComponents/MyBoughtProduct/MyBoughtProduct";
import AllSoldHistory from "../../Components/SidebarComponents/SoldHistory/AllSoldHistory";

// Define your routes using createBrowserRouter
export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/food-details/:id", element: <FoodDetails /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/product-list', element: <ProductList /> },
      { path: '/product-category/:parent-title', element: <ProductCategory /> },
      {
        path: "/view-cart",
        element: <ViewCart />,
      },
      {
        path: "/paymentSuccess/:tranID",
        element: <PaymentSuccess />,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path: "/term_and_policy",
        element: <TermAndPolicy></TermAndPolicy>,
    },
    {
        path: "/warenty_policy",
        element: <WarrantyPolicy></WarrantyPolicy>,
    }
    ]
  },
  // Private Routes
  {
    path: "/organic-food",
    element:<PrivateRoute> <Dashboard /></PrivateRoute>,
    errorElement: <Error />,
    children: [
      // Dashboard Inventory Routes
      { path: "dashboard", element: <DashboardInventory /> }, // Remove the absolute "/" path here
      { path: "add-Products", element: <AddProducts /> },
      { path: "", element: <Profile /> },
      { path: "list-Products", element: <ListProduct /> },
      { path: "quantity-update", element: <QuantityUpdates /> },
      { path: "manage-user", element: <ManageUser /> },
      { path: "list-product-manager", element: <ListProductManger /> },
      { path: "my-bought-product", element: <MyBoughtProduct /> },
      {
        path: "my-cart",
        element: <ViewCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
     
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "sold-history",
        element: <AllSoldHistory />,
      },
      // Extra Routes (Not used)
      { path: "in-progress-page", element: <InProgressPage /> },
    ],
  },
]);
