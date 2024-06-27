import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../provider/ItemProvider/ProductProvider';

const ViewCart = () => {
  const { cart, setCart, onRemoveFromCart } = useContext(ProductContext);

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

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={`${item.id}-${item.productName}`} className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="flex items-center">
                <img
                  src={`${import.meta.env.VITE_URL}/images/${item.productImage}`}
                  alt={item.productName}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{item.productName}</h2>
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
          ))
        ) : (
          <div className="text-center text-gray-500">No items in cart</div>
        )}

        {cart.length > 0 && (
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              {/* <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>৳ {calculateTotalPrice()}</span>
              </div> */}
              {/* <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <button className="text-green-600 underline">Calculate shipping</button>
              </div> */}
              <div className="flex justify-between font-semibold text-xl">
                <span>Total</span>
                <span>৳ {calculateTotalPrice()}</span>
              </div>
            </div>

            <div className="text-right mt-4">
              <Link to="/checkout">
                <button className="px-6 py-2 bg-green-600 text-white rounded">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
