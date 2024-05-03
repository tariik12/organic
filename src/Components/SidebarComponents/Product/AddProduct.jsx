import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
const {addProduct} = useContext(ProductContext);
  const handleUpload = async (data) => {
    console.log(data)
    const formData = new FormData();
    formData.append('productImage', data.productImage[0]);
    formData.append("productName", data.productName);
    formData.append("parentTitle", data.parentTitle);
    formData.append("type", data.type);
    formData.append("madeIn", data.madeIn);
    formData.append("netWeight", data.netWeight);
    formData.append("price", data.price);
    formData.append("prePrice", data.prePrice);
    formData.append("expired", data.expired);
    formData.append("description", data.description);
console.log(data)
    try {
      await addProduct(formData)
       
      console.log(data)
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col w-screen justify-evenly  py-5"
        onSubmit={handleSubmit(handleUpload)}
      >
        <div className="flex flex-col w-screen">
          <label htmlFor="file">Product Image:</label>
          <input className='p-2 h-12 w-1/2 border rounded-md' required type='file' accept='image/*' {...register('productImage')} />
         
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="productName">Product Name:</label>
          <input
            id="productName"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Product Name"
            {...register("productName")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="parentTitle">Parent Title:</label>
          <input
            id="parentTitle"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Parent Title"
            {...register("parentTitle")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="type">Type:</label>
          <input
            id="type"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Type"
            {...register("type")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="madeIn">Made In:</label>
          <input
            id="madeIn"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Made In"
            {...register("madeIn")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="netWeight">Net Weight:</label>
          <input
            id="netWeight"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Net Weight"
            {...register("netWeight")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Price"
            {...register("price")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="prePrice">Previous Price:</label>
          <input
            id="prePrice"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="number"
            placeholder="Enter Previous Price"
            {...register("prePrice")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="expired">Expired Date:</label>
          <input
            id="expired"
            className="p-2 h-12 w-1/2 border rounded-md"
            type="date"
            placeholder="Enter Previous Price"
            {...register("expired")}
            required
          />
        </div>
        <div className="flex flex-col w-screen">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="p-2 h-24 w-1/2 border rounded-md"
            type="text"
            placeholder="Enter Description"
            {...register("description")}
            required
          />
        </div>
        <button
          className="text-lg  w-1/2 text-white bg-green-500 hover:bg-green-600 border border-green-500 rounded-md p-2"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
