import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../provider/UsersProvider/UsersProvider";
import { toast } from "react-toastify";
import { Identify_AccessContext } from "../../../../provider/AccessIdentify/AccessIdentify";

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const { users, addUsers } = useContext(UserContext);
  const { Identify } = useContext(Identify_AccessContext); // Import Identify_AccessContext

  const identifyAccess = Identify && Identify.length > 0 ? Identify[0].access_identify : null;

  // Define filteredData outside useEffect
  const [filteredData, setFilteredData] = useState([]);
  const [uniqueMemberType, setUniqueMemberType] = useState([]);

  useEffect(() => {
    let tempFilteredData = [];
    if (identifyAccess === "Administration") {
      tempFilteredData = users.filter((res) => res.member_type === "Administration");
    } else if (identifyAccess === "Training") {
      tempFilteredData = users.filter((res) => res.member_type === "Training");
    } else {
      tempFilteredData = users;
    }
    setFilteredData(tempFilteredData);

    // Extract unique member types
    const uniqueTypes = [...new Set(tempFilteredData.map((user) => user.role))];
    setUniqueMemberType(uniqueTypes);
  }, [identifyAccess, users]);

  const handleAddUser = async (data) => {
    try {
      const isExistingUser = users.some(user => user.username === data.email);
      if (isExistingUser) {
        toast.warning("The username already exists. Provide a different username.");
      } else {
        addUsers(data);
        reset();
        console.log(data)
        toast.success("User added successfully");
      }
    } catch (error) {
      toast.error("Error adding member");
    }
  };

  return (
    <div className="flex justify-center Products-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit((data) => handleAddUser(data))} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96">
        <div className="mb-4">
          <h1 >Add new Member</h1>
        </div>
        <input 
          type="name" 
          placeholder='Enter User Full Name as like : Md. Shakil Khan' 
          {...register('name', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input 
          type="designation" 
          placeholder='Enter user Designation' 
          {...register('designation', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input 
          type="email" 
          placeholder='Enter username as like : tarik@admin.com' 
          {...register('email', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
        />
        <select 
          type="text" 
          placeholder='Enter Status/Role' 
          {...register('status', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Role</option>
          {
           uniqueMemberType.map((type, index) => <option key={index} value={type}>{type}</option>)
          }
          <option value=""></option>
        </select>
        <div className="mb-4 w-full">
          <label htmlFor="ProductUnit" className="block text-sm font-medium text-gray-700">User Type:</label>
          <select
            {...register('member_type', { required: true })}
            className="block w-full focus:ring-white focus:border-[#800000] sm:text-sm border-[#800000] rounded-md"
          >
            <option value="">Select User Type</option>
            <option value="Training">Training Branch</option>
            <option value="Administration">Administration Branch</option>
          </select>
        </div>
        <input 
          type="password" 
          placeholder='Enter Password' 
          {...register('password', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button 
          type="submit" 
          
        >
        Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
