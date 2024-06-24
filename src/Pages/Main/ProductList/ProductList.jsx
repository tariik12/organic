import React, { useState } from 'react';

// Sample product data
const productData = [
  { id: 1, name: 'Country Natural Whole Wheat Roti - 20pcs', price: 195 },
  { id: 2, name: 'Country Natural Plain Paratha - 10 pcs', price: 144 },
  { id: 3, name: 'Country Natural Black Seed Paratha - 20 pcs', price: 297 },
  { id: 4, name: 'Country Natural Rice Flour Roti - 10 pcs', price: 127 },
  { id: 5, name: 'Country Natural Multigrain Roti - 20 pcs', price: 212 },
  { id: 6, name: 'Country Natural Plain Paratha (Jumbo Size) - 20pcs', price: 306 },
  { id: 7, name: 'Country Natural Plain Paratha - 20 pcs', price: 272 },
  { id: 8, name: 'Low Fat Paratha (10 Pcs) 600gm', price: 128 },
];

const ProductList = () => {
  const [sortType, setSortType] = useState('');
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(300);

  const sortedAndFilteredProducts = [...productData]
    .filter(product => product.price >= minPrice && product.price <= maxPrice)
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortType === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center mb-2 md:mb-0">
          <label className="mr-2">Sort By:</label>
          <select
            className="border rounded p-2"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Price Range:</label>
          <input
            type="number"
            className="border rounded p-2 w-20 mr-2"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            min="0"
          />
          <span className="mr-2">-</span>
          <input
            type="number"
            className="border rounded p-2 w-20"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            min="0"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedAndFilteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
