/**
 * This component represents a dropdown menu for the user profile.
 * It allows users to log out and view their username.
 */

// Import necessary hooks and components
import { useEffect, useRef, useState } from "react";
 // Import AuthProvider for logout functionality
import { toast } from "react-toastify"; // Import toast for displaying notifications
import { Link } from "react-router-dom"; // Import Link for navigation
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";


const MainNavDropdownUser = () => {
    const memberData = JSON.parse(localStorage.getItem("memberData"));
    console.log(memberData)
    // State variable to manage the dropdown open/close state
    // const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Access logout function from the AuthProvider
    const { logOut } = useContext(AuthContext);
    // Reference for trigger element
    const trigger = useRef(null);
    // Reference for dropdown menu
    const dropdown = useRef(null);
    // Get user data from local storage or use empty object


    // Function to handle logout
    const handleLogout = () => {
        // Confirm logout action with user
        const confirmLogout = window.confirm("Are you sure you want to log out?");

        // If user confirms logout
        if (confirmLogout) {
            // Call logout function from AuthProvider
            logOut();
            // Remove member_type, super_type, and memberData from local storage
            localStorage.removeItem("member_type");
            localStorage.removeItem("super_type");
            localStorage.removeItem("memberData");
            // Display logout success notification
        
            toast.success('Logout Success');
        }
    };

    // Function to handle click outside dropdown to close it
    const clickHandler = (event) => {
        const target = event.target;

        if (!dropdown.current) return;

        if (
            !dropdownOpen ||
            (target instanceof Node && dropdown.current.contains(target)) ||
            (trigger.current instanceof Node && trigger.current.contains(target))
        ) {
            return;
        }

        setDropdownOpen(false);
    };

    // Effect to add event listener for clicks outside dropdown
    useEffect(() => {
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    }, [dropdownOpen]);

    // Effect to close dropdown if the ESC key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [dropdownOpen]);

    // Render the MainNavDropdownUser component
    return (
        <div className="relative z-50">
            {/* Trigger for dropdown */}
           <div className=" flex Products-center justify-center">
           <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex Products-center gap-4 text-white me-5"
                to="#"
            >
               <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        {memberData? <><img className="rounded-full border w-10 h-10" src={memberData.photo} /></>:<><img className="rounded-full w-[100px]" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" /></>}
                      </div>
                    </label>
            </Link>
            
           
           </div>

            {/* Dropdown menu */}
            {
                memberData ? <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-8 flex w-[300px] p-3 flex-col rounded-sm border border-stroke bg-white shadow-default  ${
                    dropdownOpen === true ? 'block' : 'hidden'
                }`}
            >
                
                {/* Logout button */}
                <Link to='/organic-food' className="">Dashboard</Link>
                <button className="text-left" onClick={handleLogout} >
                    Log Out
                </button>
            </div>:<div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-8 flex w-[300px] p-3 flex-col rounded-sm border border-stroke bg-white shadow-default  ${
                    dropdownOpen === true ? 'block' : 'hidden'
                }`}
            >
                
                {/* Logout button */}
                
        <div>
          {/* Login and Register */}
          <div className="gap-5 text-lime-500 flex text-xl">
            <Link to="/login" className="">
              Login
            </Link>
            |
            <Link to="/register" className="">
              Register
            </Link>
          </div>
        </div>
      
            </div>
            }
        </div>
    );
}

export default MainNavDropdownUser;