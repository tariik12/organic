import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "../../provider/ItemProvider/ProductProvider";

const PaymentSuccess = () => {
  const { tranID } = useParams();
  const [transactionFound, setTransactionFound] = useState(true);
  const { cart, onSilentRemoveFromCart } = useContext(ProductContext);

  useEffect(() => {
    const checkTransaction = async () => {
      try {
        const response = await fetch(`/api/check-transaction/${tranID}`);
        if (!response.ok) {
          setTransactionFound(false);
        }
      } catch (error) {
        setTransactionFound(false);
      }
    };

    checkTransaction();
  }, [tranID]);

  useEffect(() => {
    if (transactionFound) {
      cart.forEach(item => {
        onSilentRemoveFromCart(item.id);
      });
      localStorage.removeItem("cart");  // Clear the cart from localStorage
      toast.success("Payment Successful");
    }
  }, [transactionFound, cart, onSilentRemoveFromCart]);

  if (!transactionFound) {
    return (
      <div className="bg-gray-800 max-w-lg mx-auto p-10 my-40 rounded">
        <h1 className="text-red-600">Transaction ID not found</h1>
        <div className="text-center">
          <Link to="/" className="btn w-64 font-bold rounded mt-10 text-white bg-purple-800 border hover:border-[#830FEA] border-[#830FEA]">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 max-w-lg mx-auto p-10 my-40 rounded">
      <h1 className="text-green-600">Payment Successful</h1>
      <p className="text-orange-500 py-3">Transaction ID: {tranID}</p>
      <div className="text-center">
        <Link to="/" className="btn w-64 font-bold rounded mt-10 text-white bg-purple-800 border hover:border-[#830FEA] border-[#830FEA]">Back to Home</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
