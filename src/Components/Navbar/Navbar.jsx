import { Link } from "react-router-dom";
// import DropdownUser from "./dropdownUser";

import logo from '/logo.jpeg'
const Navbar = (props) =>{
    const userData = JSON.parse(localStorage.getItem("memberData"));
    return(
        <header className="sticky top-0 z-20 flex w-full bg-back border-4 border-cl  drop-shadow-1 ">
            <div className="flex flex-grow Products-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 ">
<div className="flex Products-center gap-2 sm:gap-4 lg:hidden">
<button onClick={(e) =>{
    e.stopPropagation();
    props.setSidebarOpen(!props.sidebarOpen)
}}>
open Side bar
</button>
<Link className="block flex-shrink-0 lg:hidden" to='/organic-food'>
    <img className="w-[70px]" src={logo} alt="Bangladesh Army Logo"/>
</Link>
</div>
            </div>
            <div className="flex Products-center gap-3 2xsm:gap-7">
          

          {/* <!-- User Area --> */}
          {/* <DropdownUser /> */}
          {/* <!-- User Area --> */}
        </div>
        </header>
    )
}

export default Navbar;