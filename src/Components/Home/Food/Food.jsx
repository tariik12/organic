import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Food = () => {
    const { Products } = useContext
    (ProductContext);
    console.log(Products)
    const categoryTitle = [
        { title: "Daily Needs" },
        { title: "Fruits" },
        { title: "Spices" },
        { title: "Honey" }
    ];

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
const approvedProduct= Products.filter(product=>product.role==="approved")
    return (
        <div>
            {categoryTitle.map(({ title }, index) => (
                <div key={index}>
                    <h1 className="border-b-4 mb-3 px-5">{title}</h1>
                    <div>
                        <Slider {...settings} className="mb-10 ">
                            {approvedProduct.filter(product => product.parentTitle === title).map(product => (
                                <div className="px-5" key={product.id}>
                                    <Link to={`/food-details/${product.id}`}>
                                        <img 
                                            className="w-full h-[250px] md:h-[450px] hover:p-2" 
                                            src={`${import.meta.env.VITE_URL}/images/${product.productImage}`} 
                                            alt={`Image for ${product.productName}`} 
                                        />
                                    </Link>
                                    <p>{product.productName}</p> 
                                    <p className="text-red-500">&#x9F3; {product.price}</p>
                                    <p className="text-inherit"><del>&#x9F3; {product.prePrice}</del> </p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Food;
