/**

The Dashboard component represents the layout of the dashboard page.
It includes a Navbar component at the top, a Sidebar component on the left side,
and an Outlet component to render child components based on the selected route.
*/
import Navbar from "../../Components/Navbar/Navbar"; // Importing Navbar component
import Sidebar from "../../Components/Sidebar/Sidebar"; // Importing Sidebar component to display menus and submenus
import { Outlet } from "react-router-dom"; // Importing Outlet from react-router-dom to render child routes
import { useState } from "react"; // Importing useState to handle sidebar open/close state
const Dashboard = () => {
// State to handle whether the sidebar is open or closed
const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <div className="">
<div className='flex h-screen overflow-hidden'>
    {/* left sidebar where shows dashboard menu and submenu */}
    <Sidebar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} ></Sidebar>

<div className='relative flex flex-1 flex-col overflow-auto overflow-x-hidden'>
    {/* The navbar shows top  right to middle */}
    <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} ></Navbar>
<main>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6  2xl:p-10">
        {/* render child components when click any submenu */}
<Outlet></Outlet>

    </div>
</main>
</div>
</div>

        </div>
    )
}

export default Dashboard;

