import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../provider/ItemProvider/ProductProvider';

const HeaderCategories = () => {
  const { products_approved } = useContext(ProductContext);

  // Get unique parent titles
  const uniqueParentTitles = [...new Set(products_approved.map(parent => parent.parentTitle))];

  // Create a list of categories with corresponding images
  const categories = uniqueParentTitles.map(title => {
    let imageUrl;
    switch (title) {
      case 'Honey':
        imageUrl = 'https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2F2vn9WsL20mvNLjVRdoldw1rtwPrauWAEEj7utrIZ.webp&w=1920&q=75';
        break;
      case 'Spices':
        imageUrl = 'https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2FoJ1xJtnks8ag27DT4u5qxOu2YDMAZBwIIBBjNl09.webp&w=1920&q=75';
        break;
      case 'Fruits':
        imageUrl = 'https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2F7vikvQcAg9KdzpqpbFgxLKEKWq2FSsKP37sobca7.webp&w=1920&q=75';
        break;
      case 'Daily Needs':
        imageUrl = 'https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2F2vn9WsL20mvNLjVRdoldw1rtwPrauWAEEj7utrIZ.webp&w=1920&q=75';
        break;
      default:
        imageUrl = 'https://via.placeholder.com/150'; // Fallback image
        break;
    }
    return { title, image: imageUrl };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 bg-green-100">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center relative">
          <Link to={`/product-category/${category.title}`}>
            <img src={category.image} alt={category.title} className="h-48" />
          </Link>
          {/* <span className="mt-2 text-center absolute">{category.title}</span> */}
        </div>
      ))}
    </div>
  );
};

export default HeaderCategories;
