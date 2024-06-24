import React, { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ProductContext } from '../../provider/ItemProvider/ProductProvider';

const Checkout = () => {
  const { cart } = useContext(ProductContext);
  console.log(cart)
  const { register, handleSubmit } = useForm();
  const [totalAmount, setTotalAmount] = useState(0); // State to hold the total amount

  // Calculate total amount whenever cart changes
  useState(() => {
    const calculateTotalAmount = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
    };
    setTotalAmount(calculateTotalAmount());
  }, [cart]);

  const onSubmit = async (data) => {
    const orderData = {
      ...data,
      price: totalAmount,
      currency: 'BDT', // or any other currency
      cart: cart,
    };

    console.log(orderData)
    try {
      const response = await axios.post(`${import.meta.env.VITE_URL}/order`, orderData);
      window.location.href = response.data.url; // Redirect to payment gateway
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-1 p-2 border rounded w-full" {...register('name', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium">District</label>
              <select className="mt-1 p-2 border rounded w-full">
                <option>Choose</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Your Zone</label>
              <select className="mt-1 p-2 border rounded w-full">
                <option>Choose</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
            <label className="block text-sm font-medium">Street Address</label>
            <input type="text" className="mt-1 p-2 border rounded w-full" {...register('address', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium">House Number</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email </label>
              <input type="email" className="mt-1 p-2 border rounded w-full" {...register('email', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium">Product Delivery Place</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Delivery Date</label>
              <input type="date" className="mt-1 p-2 border rounded w-full" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="create-account" className="mr-2" />
              <label htmlFor="create-account" className="text-sm">Create an account?</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="ship-different-address" className="mr-2" />
              <label htmlFor="ship-different-address" className="text-sm">Ship to a different address?</label>
            </div>
            <div>
              <label className="block text-sm font-medium">Special Notes (optional)</label>
              <textarea className="mt-1 p-2 border rounded w-full" rows="3"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white rounded py-2 mt-4">Place Order</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            {/* Mapping through cart items to display */}
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2 border-t pt-2">
                <span>{item.productName}</span>
                <span>৳ {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between mb-2 border-t pt-2">
              <span>Total</span>
              <span>৳ {totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
