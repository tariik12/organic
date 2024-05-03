import { FaBangladeshiTakaSign, FaSistrix } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import MainNavDropdownUser from "./MainNavDropdownUser";


const MainNavbar = () => {
  const memberData = JSON.parse(localStorage.getItem("memberData"));
  return (
    <div className="flex Products-center justify-between bg-lime-500 px-10 py-4">
      <Link to="/" className="text-[32px] lg:text-[32px] font-bold text-white">
        Organic Food
      </Link>
      {/* Search bar */}
      <div className="relative ms-2 lg:inline-block hidden">
        <input
          type="text"
          placeholder="Search"
          className="border w-[600px] rounded-2xl p-2 bg-transparent border-cyan-100  pr-16 text-white::placeholder  placeholder-cyan-100 "
          required
        />
        {/* todo-hidden */}
        <button
          className="absolute border hidden border-cyan-100 bg-transparent hover:none rounded-2xl right-0 mb-3 "
        >
          <FaSistrix className="w-16 text-cyan-100 h-8" />
        </button>
      </div>

      

      {/* profile icon image */}
      {/* Add card */}
      <BiCartAdd className="text-2xl text-white" />
      {/* Amount */}
      <FaBangladeshiTakaSign className="text-2xl text-white" />
      {/* <DropdownUser /> */}
      <MainNavDropdownUser></MainNavDropdownUser>
    </div>
  );
};

export default MainNavbar;