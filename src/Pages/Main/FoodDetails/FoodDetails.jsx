import { Link, useParams } from "react-router-dom";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";


const FoodDetails = () => {
    const { products_approved, onAddToCart } = useContext(ProductContext);
    const { id } = useParams();
    const product = products_approved.find(product => product.id === parseInt(id)); // Parse id to integer for comparison

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (product) {
            setTotalPrice(product.price * quantity);
        }
    }, [quantity, product]);

    const handleQuantity = (action) => {
        if (action === "plus" && quantity < 10) {
            setQuantity(quantity + 1);
        } else if (action === "minus" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            const productToAdd = {
                ...product,
                quantity
            };
            onAddToCart(productToAdd);
        }
    };

    if (!product) {
        return <div>Loading...</div>; // Or a more user-friendly message
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
                className="h-full"
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
                {/* <div className="flex gap-5 justify-start products_approved-center">
                    <p className="text-2xl">Quantity</p>
                    <CiSquarePlus className="text-4xl" onClick={() => handleQuantity("plus")} />
                    <p className="text-2xl">{quantity}</p>
                    <CiSquareMinus className="text-4xl" onClick={() => handleQuantity("minus")} />
                </div> */}
                <p><strong>Total Price:</strong> &#x9F3; <span className="text-lime-500">{totalPrice}</span></p>
                <div className="flex justify-start gap-10 text-white mt-5">
                   <Link to="/checkout"> <button className="btn bg-lime-500 border px-8 py-2" onClick={handleAddToCart}>Buy Now</button></Link>
                    <button className="btn bg-lime-500 border px-8 py-2" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
