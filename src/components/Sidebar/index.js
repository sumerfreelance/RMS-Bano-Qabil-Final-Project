import React, { useState, createContext, useContext } from "react";
import Button from "@mui/material/Button";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdKitchen } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

const Sidebar = () => {

  const[activeTab, setActiveTab] = useState(0);

  const context = useContext(MyContext);
  const isOpenTab=(index)=>{
    setActiveTab(index);
  }

  return (
    <>
      <div className="sidebar" >
        <ul>
          <li>
            <Link to="/Dashboard">
              <Button className={`w-100 ${activeTab===0 ? 'active' :''}`} onClick={()=>{isOpenTab(0)}}>
                <span className="icon">
                <TbLayoutDashboardFilled />
                </span>
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Kitchen">
              <Button className={`w-100 ${activeTab===1 ? 'active' :''}`} onClick={()=>{isOpenTab(1)}}>
                <span className="icon">
                <MdKitchen />
                </span>
                Kitchen
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/MenuItems">
              <Button className={`w-100 ${activeTab===2 ? 'active' :''}`} onClick={()=>{isOpenTab(2)}}>
                <span className="icon">
                <BiSolidFoodMenu />
                </span>
                Menu Items
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Staff">
              <Button className={`w-100 ${activeTab===3 ? 'active' :''}`} onClick={()=>{isOpenTab(3)}}>
                <span className="icon">
                <MdPeopleAlt />
                </span>
                Staff
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Master">
              <Button className={`w-100 ${activeTab===4 ? 'active' :''}`} onClick={()=>{isOpenTab(4)}}>
                <span className="icon">
                  <MdPersonPin />
                </span>
                Master
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Orders">
              <Button className={`w-100 ${activeTab===5 ? 'active' :''}`} onClick={()=>{isOpenTab(5)}}>
                <span className="icon">
                  <MdOutlineBorderColor />
                </span>
                Orders
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Stock">
              <Button className={`w-100 ${activeTab===6 ? 'active' :''}`} onClick={()=>{isOpenTab(6)}}>
                <span className="icon">
                  <GiNotebook />
                </span>
                Stock
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Setting">
              <Button className={`w-100 ${activeTab===7 ? 'active' :''}`} onClick={()=>{isOpenTab(7)}}>
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
