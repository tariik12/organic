import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import MainNavDropdownUser from "./MainNavDropdownUser";
import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";

const MainNavbar = () => {
  const { cart, setCart, onRemoveFromCart, searchProduct } = useContext(ProductContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const searchInput = useRef(null);
  const dropdown = useRef(null);
  const trigger = useRef(null);

  const clickHandler = (event) => {
    if (!dropdown.current) return;

    if (
      !dropdownOpen ||
      dropdown.current.contains(event.target) ||
      trigger.current.contains(event.target)
    ) {
      return;
    }

    setDropdownOpen(false);
  };

  const clickOutsideSearchHandler = (event) => {
    if (searchInput.current && !searchInput.current.contains(event.target)) {
      searchInput.current.value = "";
      searchProduct(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    document.addEventListener('click', clickOutsideSearchHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('click', clickOutsideSearchHandler);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
  };

  const removeProduct = (productId) => {
    onRemoveFromCart(productId);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("+880 17915 75729").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const dialNumber = () => {
    window.location.href = "tel:+8801791575729";
  };
  
  const handleSearch = (event) => {
    searchProduct(event.target.value);
  };

  const handleMouseLeave = () => {
    searchProduct(null);
  };

  return (
    <div>
      <div className="sticky z-50 top-0 flex items-center justify-between bg-lime-500 px-10 py-4">
        <Link to="/" className="text-[32px] lg:text-[32px] font-bold text-white">
          Organic Food
        </Link>
        <div className="relative ms-2 lg:inline-block hidden" onMouseLeave={handleMouseLeave}>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            ref={searchInput}
            onChange={handleSearch}
            placeholder="Search"
            className="border w-[600px] rounded-2xl p-2 bg-transparent border-cyan-100 pr-16 text-white::placeholder placeholder-cyan-100"
            required
          />
          <button className="absolute border hidden border-cyan-100 bg-transparent hover:none rounded-2xl right-0 mb-3">
            <FaSistrix className="w-16 text-cyan-100 h-8" />
          </button>
        </div>
        <div className="hidden md:block">
          <div className="text-white flex items-center gap-2 ">
            <p className="text-xl font-bold" onClick={copyToClipboard}>+880 17915 75729</p>
            <button className="uppercase border bg-slate-600 border-red-400 text-center" onClick={dialNumber}>call</button>
          </div>
        </div>
        {showToast && (
          <div className="fixed top-10 right-20 bg-green-500 text-white p-2 rounded z-50">
            Copied to clipboard!
          </div>
        )}
        <div className="relative">
          <div
            ref={trigger}
            onMouseEnter={() => setDropdownOpen(true)}
            className="flex items-center cursor-pointer"
          >
            <BiCartAdd className="text-2xl font-bold text-white" />
            <span className="absolute top-0 left-7 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
              {cart.length}
            </span>
          </div>
          {dropdownOpen && (
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute right-0 mt-8 flex w-[500px] p-3 flex-col rounded-sm border border-stroke bg-white shadow-default z-40"
            >
              {cart.length > 0 ? (
                <div className="h-[400px] overflow-y-scroll scroll-m-3">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.productName}`} className="flex justify-between items-center border-b pb-4 mb-4">
                      <div className="flex items-center">
                        <img
                          src={`${import.meta.env.VITE_URL}/images/${item.productImage}`}
                          alt={item.productName}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="ml-4">
                          <h2 className="text-lg" title={item.productName}>{item.productName.slice(0, 20)}...</h2>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-semibold">৳ {item.price * item.quantity}</span>
                        <div className="flex items-center mt-2">
                          <button className="px-3 py-1 border" onClick={() => decrementQuantity(item.id)}>-</button>
                          <span className="mx-2">{item.quantity}</span>
                          <button className="px-3 py-1 border" onClick={() => incrementQuantity(item.id)}>+</button>
                        </div>
                        <button
                          className="text-red-600 mt-2"
                          onClick={() => removeProduct(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between mt-2">
                    <h1>SUBTOTAL: {calculateTotalPrice()} BDT</h1>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button><Link to="/view-cart" className="btn btn-primary">View Cart</Link></button>
                    <button><Link to="/checkout" className="btn btn-secondary">Check Out</Link></button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">No items in cart</div>
              )}
            </div>
          )}
        </div>
        <MainNavDropdownUser />
      </div>
    </div>
  );
};

export default MainNavbar;
