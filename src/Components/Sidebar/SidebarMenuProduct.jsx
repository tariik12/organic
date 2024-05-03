import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline,  } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { GiConcreteBag, GiCubeforce, GiRadarCrossSection, GiReturnArrow, GiServerRack, GiShinyPurse } from "react-icons/gi";
import { PiSubtractSquareDuotone, PiUsersThreeFill } from "react-icons/pi";
import { RiUserAddFill } from "react-icons/ri";
import { FaMoneyBillTransfer, FaStaffSnake } from "react-icons/fa6";
import { LuDatabaseBackup } from "react-icons/lu";
import { ImPagebreak } from "react-icons/im";
import { LiaAccessibleIcon } from "react-icons/lia";
import { TbBuildingWarehouse, TbFileSettings, TbReportAnalytics, TbTransitionRight } from "react-icons/tb";
import { SiBlueprint,  } from "react-icons/si";
import { FaCashRegister,  FaShopware, FaHistory } from "react-icons/fa";
import { GoIssueTrackedBy } from "react-icons/go";
import { BsBuildingAdd, BsDatabaseFillDown, BsListColumns, BsReceiptCutoff } from "react-icons/bs";
import { MdAccountTree, MdAddTask, MdApi, MdManageAccounts, MdOutlineAddShoppingCart, MdOutlineCategory, MdOutlineDynamicFeed,  } from "react-icons/md";

import { FaFileImport, FaPrint, FaSitemap } from "react-icons/fa";

const SidebarMenuItem = ({ menu, subMenus, isOpen, onToggle, activeSubmenu, activeMenu }) => {
  // Map each icon string to its corresponding icon component
  const iconMap = {
    "FaSitemap": FaSitemap,
    "IoMdAddCircleOutline": IoMdAddCircleOutline,
    "FaFileImport": FaFileImport,
    "FaPrint": FaPrint,
    "BsBuildingAdd": BsBuildingAdd,
    "MdAccountTree": MdAccountTree,
    "BsListColumns": BsListColumns,
    "TbTransitionRight": TbTransitionRight,
    "ImPagebreak": ImPagebreak,
    "BsReceiptCutoff": BsReceiptCutoff,
    "MdAddTask": MdAddTask,
    "CiBoxList": CiBoxList,
    "GiShinyPurse": GiShinyPurse,
    "MdOutlineAddShoppingCart": MdOutlineAddShoppingCart,
    "GiReturnArrow": GiReturnArrow,
    "GiConcreteBag": GiConcreteBag,
   
    "LuDatabaseBackup": LuDatabaseBackup,
    "FaShopware": FaShopware,
    "GiCubeforce": GiCubeforce,
    "MdOutlineCategory": MdOutlineCategory,
    "FaMoneyBillTransfer": FaMoneyBillTransfer,
    "FaCashRegister": FaCashRegister,
    "PiUsersThreeFill": PiUsersThreeFill,
    "FaStaffSnake": FaStaffSnake,
    "TbReportAnalytics": TbReportAnalytics,
    "MdOutlineDynamicFeed": MdOutlineDynamicFeed,
    "RiUserAddFill": RiUserAddFill,
    "MdManageAccounts": MdManageAccounts,
    "LiaAccessibleIcon": LiaAccessibleIcon,
    "GiServerRack": GiServerRack,
    "GiRadarCrossSection": GiRadarCrossSection,
    "TbBuildingWarehouse": TbBuildingWarehouse,
    "PiSubtractSquareDuotone": PiSubtractSquareDuotone,
    "SiBlueprint": SiBlueprint,
    "MdApi": MdApi,
    "TbFileSettings": TbFileSettings,
    "GoIssueTrackedBy": GoIssueTrackedBy,
    "BsDatabaseFillDown": BsDatabaseFillDown,
    "FaHistory": FaHistory
  };

  return (
    <div>
      <Link
        to="#"
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out dark:hover:bg-meta-4 ${activeMenu === menu.dashboard_inventory ? 'bg-[#002480]' : ''}`}
        onClick={onToggle}
      >
        <span className="me-2 uppercase">{menu.span}</span>
      </Link>

      {isOpen && subMenus && (
        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
          {subMenus.map(({ link_to, text, icon }) => {
            const IconComponent = iconMap[icon]; // Get the corresponding icon component
            return (
              <li key={link_to}>
                <Link
                  to={`${menu.dashboard_inventory}/${link_to}`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out dark:hover:bg-meta-4 ${activeSubmenu === link_to ? 'text-[#002480]' : ''}`}
                >
                  {IconComponent && <IconComponent />} {text}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SidebarMenuItem;
