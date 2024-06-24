
import { Outlet } from 'react-router-dom';

import MainNavbar from '../../../Components/Shared/MainNavbar/MainNavbar';
import Footer from '../../../Components/Shared/Footer/Footer';

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";

import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";

const MainLayout = () => {
  const { searchQuery, products, onAddToCart } = useContext(ProductContext);
  console.log(searchQuery);
  const [searchProducts, setSearchProducts] = useState([]);

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

    setSearchProducts(filteredData);
  }, [products, searchQuery]);

  return (
    <div>
      <MainNavbar></MainNavbar>
      {searchQuery ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchProducts.length > 0 ? (
            searchProducts.map((product) => (
              <div className=" " key={product.id}>
                <div className="mx-2 border-4 relative rounded-xl h-[450px]">
                  <Link to={`/food-details/${product.id}`}>
                    <img
                      className="w-full rounded-t-xl gap-10 md:h-[250px]"
                      src={`${import.meta.env.VITE_URL}/images/${product.productImage}`}
                      alt={`Image for ${product.productName}`}
                    />
                  </Link>
                  <div className="p-2">
                    <p>{product.productName.slice(0, 40)}...</p>
                    <p className="text-red-500">&#x9F3; {product.price}</p>
                    <p className="text-inherit">
                      <del>&#x9F3; {product.prePrice}</del>
                    </p>
                    <div className="flex justify-start gap-10 text-white mt-5 absolute bottom-0">
                      <Link to={`/food-details/${product.id}`}>
                        <button className="btn bg-lime-500 border px-8 py-2">
                          Details
                        </button>
                      </Link>
                      <button onClick={() => onAddToCart(product)}>
                        <BiCartAdd className="text-2xl font-bold text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center border p-5 flex items-center justify-center w-screen text-orange-500">This Product is not Available</p>
          )}
        </div>
      ) : (
        <>
           <Outlet></Outlet>
        </>
      )}
       <Footer></Footer>
    </div>
  );
};

export default MainLayout;
