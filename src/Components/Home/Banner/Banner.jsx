

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const organicBanner = [
    {
        image:"https://organiconline.com.bd/wp-content/uploads/2022/02/Website-Banner-2.jpg"
    },
    {
        image:"https://naturals.com.bd/wp-content/uploads/2022/03/1-web%206.jpg"
    },
    {
        image:"https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2FL6RTWBtRx7J6UTgR9MSQ1KZyD6ogdbPePKeyrdwq.webp&w=1920&q=75"
    },
    {
        image:"https://www.khaasfood.com/wp-content/uploads/2024/04/15th-April-Desktop-1536x461.webp"
    },
]


const Banner = () => {


    const settings = {
        autoPlay:true,
        
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Slider {...settings} className="mb-10">
            {
              organicBanner?.map((room) =><div key={room._id}>
              <img className="w-full  h-[250px] md:h-[450px]" src={room.image} alt="" />
           </div>
             
          
                   
              )
            }
        
      </Slider>

        <div>
   
             
               
            
        </div>
        </div>
    );
};

export default Banner;