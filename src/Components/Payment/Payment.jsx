import { useForm } from "react-hook-form";
import { useContext } from "react";

import moment from "moment/moment";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
// TODO: PROVIDE PUBLISH KEY

const Payment = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,} = useForm();
    const cart =100;
    const productData = cart;
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    parseFloat(total.toFixed(2))
    
   

    const onSubmit = (data) =>{    
        console.log(data)
        data.price = parseInt(total)
        if(data){
          fetch("https://bd-crafts-server.vercel.app/order",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            window.location.replace(result.url)
            console.log(result)
        })
        }
       
    }
    

    return (
        <div>
           <div className=" container mt-8">
          
          <h1 className="text-3xl font-semibold mb-4 text-center">Confirm Order</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="buyerName"
                defaultValue={user.displayName}
                placeholder='Your Name'
                readOnly
               
                {...register('buyerName',{ required: true })}
                className="mt-1 p-2 border rounded w-full"
              />
            
            </div>
            <div className="mb-4">
             
              <input
                type="email"
                name="buyerEmail"
                defaultValue={user.email}
                placeholder='Your Email'
                {...register("buyerEmail")}
                readOnly
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
          
            <div className="mb-4">
             
             <input
               type="text"
               name="confirmTime"
               readOnly
               value= { moment(user.date).format('llll')}
               {...register("confirmTime")}
               className="mt-1 p-2 border rounded w-full"
             />
           </div>
           <div className="mb-4">
             
             <textarea
               type="text"
               name="buyerAddress"
               placeholder='Your Address'
               {...register("buyerAddress")}
               className="mt-1 p-2 border rounded w-full"
               required
             />
           </div>

            <div className="flex justify-center">
            <button
            onClick={onSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded "
            >
               Confirm Order
            </button>
            </div>
          </form>
        </div>
        
        </div>
    );
};

export default Payment;