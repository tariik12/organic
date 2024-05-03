import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "/login_bg.jpeg"; // Import the background image

import { toast } from 'react-toastify';

import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { UserContext } from '../../../provider/UsersProvider/UsersProvider';


const Login = () => {
    const { singIn } = useContext(AuthContext); // Corrected "singIn" to "singIn"
    const { users, addUsers } = useContext(UserContext); // Corrected "singIn" to "singIn"
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        singIn(data.email, data.password) // Corrected "singIn" to "singIn"
        .then(() => {
            const loggedUser = result.user;
            console.log(loggedUser);
            if (loggedUser) {
                const saveUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    photo: loggedUser.photoURL,
                    role: "user",
                };
                // Assuming you have access to 'users' and 'addUsers' here
                const existingUser = users.find(user => user.email === saveUser.email)
                if (!existingUser) {
                    addUsers(saveUser);
                    localStorage.setItem("memberData", JSON.stringify(saveUser));
                } else {
                    localStorage.setItem("memberData", JSON.stringify(existingUser));
                }
                navigate(from, { replace: true }); // Fix 'from' to "/login"
                toast.success("Registration success");
            }
        })
        //     .then((result) => {
        //         const loggedUser = result.user;
        // console.log(loggedUser);
        // if (loggedUser) {
        //   const saveUser = {
        //     name: loggedUser.displayName,
        //     email: loggedUser.email,
        //     photo: loggedUser.photoURL,
        //     role: "user",
        //   };
        //   const existingUser = users.find(user => user.email === saveUser.email)
        //  if(!existingUser){
        //   addUsers(saveUser);
        //   localStorage.setItem("memberData", JSON.stringify(saveUser));
        // }else{
        //    localStorage.setItem("memberData", JSON.stringify(existingUser));

        //  }

        //   navigate(from, { replace: true });
        //   toast.success("Login success");
        // }
        //     })
            .catch(error => console.log(error.message)); // Corrected "massage" to "message"
    };

    return (
        <div className="hero min-h-screen bg-base-100 bg-cover bg-center shadow-2xl pt-20 pb-14" style={{ backgroundImage: `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)), url(${logo})` }}>
            <div className='flex Products-center justify-center '>
                <div className=" px-5  max-w-sm shadow-2xl bg-[#87787855]">
                    <h3 className='text-4xl pt-5 font-serif text-white'>Login</h3>
                    <SocialLogin />
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-white">
                        <div className="">
                            <input type="email" {...register('email', { required: true })} placeholder="✉ Email Address" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3" />
                            {errors.email && <p className='text-red-800'>Please enter Your Name</p>}
                        </div>
                        <div className="">
                            <input {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                            })} type="password" placeholder=" 🗝 Password" className="bg-transparent border-b border-primary text-white::placeholder placeholder-white focus:outline-none py-3 w-full" />
                            {errors.password?.type === 'required' && <p className='text-red-800' >Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-800' >Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-800' >Password must be 20 characters or less</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-800' >Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>}
                        </div>
                        <div className="form-control mt-3">
                            <div>Create New Account <Link to='/register' className='text-lime-500'>Register</Link></div>
                            <div className='flex Products-center justify-center pb-4'>
                                <input type="submit" className='  btn border-primary px-3 py-1 btn-sm mt-4 bg-lime-500' value={'Login'} /> {/* Removed onSubmit from input */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
