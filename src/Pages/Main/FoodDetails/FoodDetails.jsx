import { useParams } from "react-router-dom";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";

const FoodDetails = () => {
    const { Products } = useContext(ProductContext);
    const { id } = useParams();
    const product = Products.find(product => product.id === parseInt(id)); // Parse id to integer for comparison
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.price * quantity); // Set initial total price

    const handleQuantity = (action) => {
        if (action === "plus" && quantity < 10) {
            setQuantity(quantity + 1);
        } else if (action === "minus" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        setTotalPrice(product.price * quantity);
    }, [quantity, product.price]);

    return (
        <div className="flex gap-5 p-3">
            <img 
                className="w-1/2"
                src={`${import.meta.env.VITE_URL}/images/${product.productImage}`} 
                alt={`Image for ${product.productName}`} 
            />
            <div className="left-0 w-full mt-5 flex flex-col gap-5">
                <h1>{product.productName}</h1>
                <p><strong>Description: </strong>{product.description}</p>
                <p><strong>Type:</strong> {product.type}</p>
                <p><strong>Weight:</strong> {product.netWeight}</p>
                <p><strong>Made In:</strong> {product.madeIn}</p>
               <p><strong>Expire Date:</strong> {new Date(product.expired).toLocaleDateString()}</p>
                <p className="text-red-500 text-2xl">&#x9F3; {product.price}</p>
                <p className="text-inherit"><del>&#x9F3; {product.prePrice}</del></p>
                <div className="flex gap-5 justify-start Products-center">
                    <p className="text-2xl">Quantity</p>
                    <CiSquarePlus className="text-4xl" onClick={() => handleQuantity("plus")} />
                    <p className="text-2xl">{quantity}</p>
                    <CiSquareMinus className="text-4xl" onClick={() => handleQuantity("minus")} />
                </div>
                <p><strong>Total Price:</strong> &#x9F3; <span className="text-lime-500">{totalPrice}</span></p>
                <div className="flex justify-start gap-10 text-white mt-5">
                    <button className="btn bg-lime-500 border px-8 py-2">Buy Now</button>
                    <button className="btn bg-lime-500 border px-8 py-2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
