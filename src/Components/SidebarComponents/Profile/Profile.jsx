import React from 'react';

const Profile = () => {
    const memberData = JSON.parse(localStorage.getItem("memberData"));
    return (
        <div className='flex justify-center items-center '>
            <div className='flex flex-col justify-center items-center border p-20 shadow-xl rounded-lg'>
            <img src={memberData.photo} className='rounded-full' alt="" />
            <h1>{memberData.name}</h1>
            <p>{memberData.role}</p>
            <p>{memberData.email}</p>

        </div>
        </div>
    );
};

export default Profile;