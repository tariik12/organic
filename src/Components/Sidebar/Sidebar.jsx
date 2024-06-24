import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import logo from '/logo.jpeg';

const usersMenus = [

  {
    text: "My Card",
    link_to: "my-cart",
  },
  {
    text: "My Bought Product",
    link_to: "my-bought-product",
  },
];

const managerMenus = [

  {
    text: "Add Products",
    link_to: "add-products",
  },
  {
    text: "List Products",
    link_to: "list-product-manager",
  },
  {
    text: "My Card",
    link_to: "my-cart",
  },
  {
    text: "My Bought Product",
    link_to: "my-bought-product",
  },
];

const adminMenus = [

  {
    text: "Dashboard",
    link_to: "dashboard",
  },
  {
    text: "Add Products",
    link_to: "add-products",
  },
  {
    text: "Handle Products",
    link_to: "list-products",
  },
  {
    text: "Quantity Update",
    link_to: "quantity-update",
  },
 
  {
    text: "Manage Users",
    link_to: "manage-user",
  },
  {
    text: "All Sold History",
    link_to: "sold-history",
  },
  {
    text: "My Card",
    link_to: "my-cart",
  },
  {
    text: "My Bought Product",
    link_to: "my-bought-product",
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const memberData = JSON.parse(localStorage.getItem("memberData"));
  console.log(memberData)
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const currentDashboardMenu = adminMenus.find((menu) =>
      pathname.includes(menu.link_to)
    );
    setActiveMenu(currentDashboardMenu ? currentDashboardMenu.link_to : null);
    setOpenMenu(currentDashboardMenu ? currentDashboardMenu.link_to : null);
  }, [pathname]);

  useEffect(() => {
    const clickHandler = (target) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = (keyCode) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  return (
    <aside className={`absolute left-0 top-0 z-40 flex h-screen w-72.5 flex-col overflow-y-hidden bg-back border-4 border-cl text-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      ref={sidebar}
    >
      <div className="flex flex-col  justify-center items-center md:justify-center gap-2 px-2 pt-5 lg:py-6.5">
        <Link to="/">
          <img className="w-[100px] mx-auto  rounded-full" src={logo} alt="Bangladesh Army Logo" />
        </Link>
        <Link to='/organic-food' title="Click Me For Profile"><p className="text-4xl">{memberData.role}</p></Link>
        <IoMdCloseCircleOutline ref={trigger} onClick={() => setSidebarOpen(!sidebarOpen)} className="block lg:hidden text-purple-700 text-4xl font-extrabold text-right" />
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {memberData.role === "admin" ? (
            <ul className="mb-6 flex flex-col gap-1.5">
              {adminMenus.map((menu) => (
                <li key={menu.link_to}>
                  <Link
                    to={menu.link_to}
                    className={`block px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 ease-linear ${
                      pathname.includes(menu.link_to) ? 'bg-purple-700' : ''
                    }`}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          ) : memberData.role === "manager" ? (
            <ul className="mb-6 flex flex-col gap-1.5">
              {managerMenus.map((menu) => (
                <li key={menu.link_to}>
                  <Link
                    to={menu.link_to}
                    className={`block px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 ease-linear ${
                      pathname.includes(menu.link_to) ? 'bg-purple-700' : ''
                    }`}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mb-6 flex flex-col gap-1.5">
              {usersMenus.map((menu) => (
                <li key={menu.link_to}>
                  <Link
                    to={menu.link_to}
                    className={`block px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 ease-linear ${
                      pathname.includes(menu.link_to) ? 'bg-purple-700' : ''
                    }`}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
