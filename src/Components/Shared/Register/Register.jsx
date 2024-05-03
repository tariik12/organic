
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import logo from "/login_bg.jpeg";
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { UserContext } from '../../../provider/UsersProvider/UsersProvider';

const Register = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const {users,addUsers} = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.password === data.confirm) {
            createUser(data.email, data.password)
                .then((result) => {
                    updateUserProfile(data.name, data.photoURL)
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
                                navigate("/", { replace: true }); // Fix 'from' to "/login"
                                toast.success("Registration success");
                            }
                        })
                        .catch(error => console.error(error.message));
                })
                .catch(error => console.error(error.message));
        } else {
            toast.error('Passwords do not match');
        }
    };

    return (
        <div className="hero min-h-screen bg-cover bg-base-100 shadow-2xl flex Products-center justify-center" style={{ backgroundImage:
            `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)), url(${logo})` }}>
            <div className="card px-5 max-w-sm shadow-2xl bg-[#87787855]">
                <h3 className='text-4xl pt-5 font-serif text-white'>Create Account</h3>
                <SocialLogin />
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="">
                        <input {...register('name', { required: true })} type="text" name="name" placeholder="Enter Your Name" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white py-3" />
                        {errors.name && <p className='text-red-400'>Please enter your name</p>}
                    </div>
                    <div className="">
                        <input {...register('photoURL', { required: true })} type="text" name="photoURL" placeholder="Enter Your Photo" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white py-3" />
                        {errors.photoURL && <p className='text-red-400'>Please enter your photo URL</p>}
                    </div>
                    <div className="">
                        <input type="email" {...register('email', { required: true })} placeholder="Email" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white py-3" />
                        {errors.email && <p className='text-red-400'>Please enter your email</p>}
                    </div>
                    <div className="">
                        {
                            toggle2 ? <FaRegEye className='z-10 absolute text-4xl ms-[200px]' onClick={() => setToggle2(!toggle2)} /> :
                                <FaRegEyeSlash className='z-10 absolute text-4xl ms-[200px]' onClick={() => setToggle2(!toggle2)} />
                        }
                        <input {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                        })} type={toggle2 ? "text" : "password"} placeholder="Password" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white py-3" />
                        {errors.password?.type === 'required' && <p className='text-red-700'>Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-700'>Password must be at least 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-red-700'>Password must be at most 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-700'>Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character</p>}
                    </div>
                    <div className="">
                        {
                            toggle1 ? <FaRegEye className='z-10 absolute text-4xl ms-[200px]' onClick={() => setToggle1(!toggle1)} /> :
                                <FaRegEyeSlash className='z-10 absolute text-4xl ms-[200px]' onClick={() => setToggle1(!toggle1)} />
                        }
                        <input {...register('confirm', { required: true })} type={toggle1 ? "text" : "password"} placeholder="Confirm Password" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white py-3" />
                        {errors.confirm && <p className='text-red-400'>Please confirm your password</p>}
                    </div>
                    <div className="form-control mt-6">
                        <div className='text-white'>Already have an account<Link to='/login' className='text-lime-500'> Login</Link></div>
                        <div className='flex Products-center justify-center pb-4'>
                    <div className="form-control mt-6">
                        <div className='text-white'>Already have an account<Link to='/login' className='text-lime-500'> Login</Link></div>
                        <div className='flex Products-center justify-center pb-4'>
                            <button type="submit" className='btn border-primary px-3 py-1 btn-sm mt-4 bg-lime-500'>SignIn</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
