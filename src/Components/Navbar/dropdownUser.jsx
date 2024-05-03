// /**
//  * This component represents a dropdown menu for the user profile.
//  * It allows users to log out and view their username.
//  */

// // Import necessary hooks and components
// import React, { useEffect, useRef, useState } from "react";
//  // Import AuthProvider for logout functionality
// import { toast } from "react-toastify"; // Import toast for displaying notifications
// import { Link } from "react-router-dom"; // Import Link for navigation
// import { AuthContext } from "../../provider/AuthProvider/AuthProvider";



// const DropdownUser = () => {
//     // State variable to manage the dropdown open/close state
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     // Access logout function from the AuthProvider
//     // Reference for trigger element
//     const trigger = useRef(null);
//     // Reference for dropdown menu
//     const dropdown = useRef(null);
//     const { logOut } = useContext(AuthContext);
//     // Get user data from local storage or use empty object
//     const data = JSON.parse(localStorage.getItem("memberData")) || {};

//     // Function to handle logout
//     const handleLogout = () => {
//         // Confirm logout action with user
//         const confirmLogout = window.confirm("Are you sure you want to log out?");

//         // If user confirms logout
//         if (confirmLogout) {
//             // Call logout function from AuthProvider
//             logOut();
//             // Remove member_type, super_type, and memberData from local storage
//             localStorage.removeProduct("member_type");
//             localStorage.removeProduct("super_type");
//             localStorage.removeProduct("memberData");
//             // Display logout success notification
//             toast.success('Logout Success');
//             window.location.href = '/';
//         }
//     };

//     // Function to handle click outside dropdown to close it
//     const clickHandler = (event) => {
//         const target = event.target;

//         if (!dropdown.current) return;

//         if (
//             !dropdownOpen ||
//             (target instanceof Node && dropdown.current.contains(target)) ||
//             (trigger.current instanceof Node && trigger.current.contains(target))
//         ) {
//             return;
//         }

//         setDropdownOpen(false);
//     };

//     // Effect to add event listener for clicks outside dropdown
//     useEffect(() => {
//         document.addEventListener('click', clickHandler);
//         return () => document.removeEventListener('click', clickHandler);
//     }, [dropdownOpen]);

//     // Effect to close dropdown if the ESC key is pressed
//     useEffect(() => {
//         const keyHandler = ({ keyCode }) => {
//             if (!dropdownOpen || keyCode !== 27) return;
//             setDropdownOpen(false);
//         };
//         document.addEventListener('keydown', keyHandler);
//         return () => document.removeEventListener('keydown', keyHandler);
//     }, [dropdownOpen]);

//     // Render the DropdownUser component
//     return (
//         <div className="relative">
//             {/* Trigger for dropdown */}
//             <Link
//                 ref={trigger}
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex Products-center gap-4 text-white me-5"
//                 to="#"
//             >
//                 {/* Display user's username */}
//                 {data.username || 'User'}
//             </Link>

//             {/* Dropdown menu */}
//             <div
//                 ref={dropdown}
//                 onFocus={() => setDropdownOpen(true)}
//                 onBlur={() => setDropdownOpen(false)}
//                 className={`absolute right-0 mt-4 flex w-[300px] p-3 flex-col rounded-sm border border-stroke bg-white shadow-default  ${
//                     dropdownOpen === true ? 'block' : 'hidden'
//                 }`}
//             >
//                 {/* Logout button */}
//                 <button onClick={handleLogout} >
//                     Log Out
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default DropdownUser;
