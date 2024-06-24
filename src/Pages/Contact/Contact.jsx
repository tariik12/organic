import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4 uppercase">Contact Us</h2>
     
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg  flex flex-col gap-8">
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                id="name"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                id="email"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })}
              />
              {errors.email && <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                id="message"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                {...register("message", { required: true })}
              />
              {errors.message && <p className="text-red-500 text-xs italic">Please enter your message.</p>}
            </div>
            
            <div className="mb-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form> */}
          <h2>Call: 0172 2165 12351</h2>
          <h2>Call: 0172 2165 12351</h2>
          <h2>Email: infoorganic@food.com</h2>
        </div>
        <div className="bg-white p-6 rounded-lg ">
        <p className="mt-5 text-sm">
                            <strong>Registered Address:</strong> <br /> 
                            Ta-189/1, 4th Floor, Mohakhali, Dhaka-1212 <br /><br />
                            <strong>Head Office:</strong> <br /> 
                            House-23, Road-04, Block-F,Mohakhali <br />
                            Dhaka-1213 <br /> <br />
                            <strong>Shop:</strong> <br /> 
                            Water Nir, BA-84/B, Lake Drive Rd, Mohakhali, Dhaka-1212
                        </p>
          
        </div>
      </div>

     
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.107615304545!2d90.39633667439254!3d23.779181887672575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77055555555%3A0xcfb6cac3eb68c145!2sMohakhali%20Kacha%20Bazar!5e0!3m2!1sen!2sbd!4v1718466381178!5m2!1sen!2sbd"  width="100%" 
            height="300" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            title="Google Maps"></iframe>
    </div>

  );
};

export default Contact;