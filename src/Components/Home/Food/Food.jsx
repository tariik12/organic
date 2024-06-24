import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BiCartAdd } from "react-icons/bi";

const Food = () => {
  const { products, onAddToCart } = useContext(ProductContext);

  const categoryTitle = [
    { title: "Daily Needs" },
    { title: "Fruits" },
    { title: "Spices" },
    { title: "Honey" }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const approvedProducts = products.filter(product => product.role === "approved");

  return (
    <div>
      {categoryTitle.map(({ title }, index) => (
        <div key={index}>
          <h1 className="border-b-4 text-[#84CC16] border-[#60c5e1] mb-3 px-5">{title}</h1>
          <div>
            <Slider {...settings} className="mb-10">
              {approvedProducts.filter(product => product.parentTitle === title).map(product => (
                <div className="" key={product.id}>
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
                          className="btn bg-lime-500 border px-8 py-2" 
                          onClick={() => onAddToCart(product)}
                        >
                          <BiCartAdd className="text-2xl font-bold text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
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
