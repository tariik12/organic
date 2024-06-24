import React, { useContext } from 'react';
import { ProductContext } from '../../provider/ItemProvider/ProductProvider';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const { cart, setCart } = useContext(ProductContext);
  const { register, handleSubmit } = useForm();
console.log(cart)
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
              <label className="block text-sm font-medium">Email (optional)</label>
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
           
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            {/* {
              setCart.map(cart =><div className="flex justify-between mb-2 border-t pt-2">
                <span>{cart.productName}</span>
                <span>৳ 340</span>
              </div>)
            } */}
            <div className="flex justify-between mb-2 border-t pt-2">
              <span>Subtotal</span>
              <span>৳ 340</span>
            </div>
            <div className="flex justify-between font-semibold text-xl border-t pt-2">
              <span>Total</span>
              <span>৳ {totalAmount}</span>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Pay Online</label>
              <select className="mt-1 p-2 border rounded w-full">
                <option>SSLCommerz</option>
               
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Notes</label>
              <textarea className="mt-1 p-2 border rounded w-full" rows="3">
                Please check the Delivery Policy for estimated shipping dates. Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </textarea>
            </div>
            <button type="button" className="w-full bg-green-600 text-white rounded py-2 mt-4">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
