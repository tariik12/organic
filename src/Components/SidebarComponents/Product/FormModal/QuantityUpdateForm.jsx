// QuantityUpdateForm.jsx
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ProductContext } from "../../../../provider/ItemProvider/ProductProvider";

const QuantityUpdateForm = ({ onClose, selectedProduct }) => {
  const { register, handleSubmit } = useForm();
  const { id, quantity, productName } = selectedProduct;
  const { updateProduct } = useContext(ProductContext);

  const onSubmitForm = async (data) => {
    const plusQuantity = parseInt(data.plusQuantity) || 0;
    const minusQuantity = parseInt(data.minusQuantity) || 0;
    const updatedQuantity = quantity + plusQuantity - minusQuantity;

    if (isNaN(updatedQuantity) || updatedQuantity < 0) {
      toast.warn("Invalid quantity");
      return;
    }

    try {
      await updateProductQuantity(id, updatedQuantity);
      toast.success("Quantity updated successfully");
      onClose();
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error("Failed to update quantity");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1>Update Quantity</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex justify-between">
          <p>{productName}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="plusQuantity" className="block text-sm font-medium text-gray-700 mb-2">
            Update Quantity + :
          </label>
          <input
            type="number"
            id="plusQuantity"
            {...register('plusQuantity')}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="minusQuantity" className="block text-sm font-medium text-gray-700 mb-2">
            Update Quantity - :
          </label>
          <input
            type="number"
            id="minusQuantity"
            {...register('minusQuantity')}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default QuantityUpdateForm;
