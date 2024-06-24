import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../provider/ItemProvider/ProductProvider';

const Navbar = () => {
  const { products_approved } = useContext(ProductContext);
  const [state, setState] = useState(false);
  const uniqueParentTitle = [...new Set(products_approved.map(parent => parent.parentTitle))];

  const handleAllProduct = () => {
    setState(true);
  };
  const handleMouseLeave = () => {
    setState(false);
  };
 

  return (
    <div>
      <div className='grid grid-cols-5 gap-5 ' >
        <div>
          <button onMouseEnter={handleAllProduct}
                     

          >All</button>
        </div>
        <div className='col-span-3 flex items-center justify-around'>
          {uniqueParentTitle.slice(0, 3).map((parent_title, index) => (
            <Link key={index} to={`/product-category/${parent_title}`}>{parent_title}</Link>
          ))}
        </div>
      </div>
      {state === true && (
        <div className='relative z-50 top-0'  onMouseLeave={handleMouseLeave}>
          <div className='absolute ps-20 grid grid-cols-8 w-full  gap-3 '>
          {uniqueParentTitle.map((parent_title, index) => (
            <div className='bg-white p-5 border rounded-xl'><Link className=' text-center' key={index} to={`/product-category/${parent_title}`} >{parent_title}</Link></div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
