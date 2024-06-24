import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ProductContext } from '../../provider/ItemProvider/ProductProvider';

const Checkout = () => {
  const { cart, setCart } = useContext(ProductContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
    const orderData = {
      ...data,
      price: totalAmount,
      currency: 'BDT', // or any other currency
      cart: cart,
    };

    try {
      const response = await axios.post('https://localhost:3000/order', orderData);
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
          <form className="space-y-4" >
            
            <div>
              <label className="block text-sm font-medium">Email</label>
             
            </div>
            <div>
             
            </div>
            <div>
              
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" {...register('state', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium">Postcode</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" {...register('postcode', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" {...register('country', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" {...register('phone', { required: true })} />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white rounded py-2 mt-4">Place Order</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2 border-t pt-2">
                <span>{item.productName}</span>
                <span>৳ {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between mb-2 border-t pt-2">
              <span>Total</span>
              <span>৳ {cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0)}</span>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Pay Online</label>
              <select className="mt-1 p-2 border rounded w-full">
                <option>SSLCommerz</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
