import React, { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../../provider/ItemProvider/ProductProvider';
import { BiCartAdd } from 'react-icons/bi';

const ProductCategory = () => {
  const { 'parent-title': parentTitle } = useParams();
  const { products_approved, onAddToCart } = useContext(ProductContext);

  const categories = useMemo(() => {
    return products_approved.filter(product => product.parentTitle === parentTitle);
  }, [products_approved, parentTitle]);

  return (
    <div className="container mx-auto px-4 py-8">
     { parentTitle&& <h2 className="text-2xl font-semibold mb-6">Product Category: {parentTitle}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   

{categories.map(product => (
                                <div className=" " key={product.id}>
                                    <div className="mx-2 border-4 relative rounded-xl h-[450px]">
                                        <Link to={`/food-details/${product.id}`}>
                                            <img 
                                                className="w-full rounded-t-xl gap-10 md:h-[250px]" 
                                                src={`${import.meta.env.VITE_URL}/images/${product.productImage}`} 
                                                alt={`Image for ${product.productName}`} 
                                            />
                                        </Link>
                                        <div className="p-2">
                                            <p>{product.productName.slice(0, 40)}...</p>
                                            <p className="text-red-500">&#x9F3; {product.price}</p>
                                            <p className="text-inherit"><del>&#x9F3; {product.prePrice}</del></p>
                                            <div className="flex justify-start gap-10 text-white mt-5 absolute bottom-0">
                                                <Link to={`/food-details/${product.id}`}>
                                                    <button className="btn bg-lime-500 border px-8 py-2">Details</button>
                                                </Link>
                                                <button 
                                                    className="" 
                                                    onClick={() => onAddToCart(product)}
                                                >
                                                    <BiCartAdd className="text-2xl font-bold text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
      </div>
    </div>
  );
};

export default ProductCategory;
