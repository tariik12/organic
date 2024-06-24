

import Banner from "../../../Components/Home/Banner/Banner";
import ExtraSection from "../../../Components/Home/ExtraSection/ExtraSection";
import Food from "../../../Components/Home/Food/Food";
import HeaderCategories from "../../../Components/Home/HeaderCategories/HeaderCategories";
import ProductCategory from "../../../Components/Home/ProductCategory/ProductCategory";
import Navbar from "../../../Components/Navbar/Navbar";


const Home = () => {
  
  return (
    <div>
      <Navbar />
    
          <Banner />
          <HeaderCategories />
          <ProductCategory />
          <Food />
          <ExtraSection />
     
    </div>
  );
};

export default Home;
