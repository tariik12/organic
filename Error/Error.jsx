import React from "react"; // Importing React library for JSX syntax
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation

// Error component definition
const Error = () => {
  // JSX return representing the error page
  return (
    <div className="max-w-screen-xl overflow-y-hidden  relative">
      {/* Error message */}
      <h1 className="flex Products-center justify-center h-screen" style={{fontSize:"300px"}}>Oop <span className="text-red-800">s</span> !</h1>
      
      {/* Link to navigate to the dashboard */}
      <Link to='/organic-food' className="absolute top-0 left-0 right-0 bottom-0 " >
        Go To Dashboard
      </Link>
    </div>
  );
};

// Exporting the Error component as the default export
export default Error;
