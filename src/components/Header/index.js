import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Profile from "../../assets/images/profile.jpg";
import { IoMenu } from "react-icons/io5";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Emily from "../../assets/images/Emily.jpg";
import ChefSara from "../../assets/images/ChefSara.jpg";
import Alice from "../../assets/images/Alice.jpg";
import Table5 from "../../assets/images/Table5.jpg";
import Michael from "../../assets/images/Michael.jpg";
import WaiterBen from "../../assets/images/WaiterBen.jpg";
import John from "../../assets/images/John.jpg";
import { MyContext } from "../../App";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);

  
  const context = useContext(MyContext)

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setisOpennotificationDrop(true);
  };

  const handleClosenotificationsDrop = () => {
    setisOpennotificationDrop(false);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100 flex-row">
          {/* logo wrapper */}
          <div className="col-3 part1">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={logo} />
              <span>TASTE OF NATIONS</span>
            </Link>
          </div>


          {
            context.windowWidth>992 &&
            <div className="col-3 d-flex align-items-center part2 res-hide">
            <Button className="rounded-circle" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
              {
                context.isToggleSidebar===false ? <MdMenuOpen/> : <MdOutlineMenu/>
              }
            </Button>
            <SearchBox />
          </div>
          }
         

          <div className="col-sm-6 d-flex align-items-center justify-content-end part3">
            <Button className="rounded-circle mr-3">
              <MdOutlineLightMode />
            </Button>

            <div className="dropdownWrapper position-relative">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpennotificationsDrop}
              >
                <FaRegBell />
              </Button>

              <Button
                className="rounded-circle mr-3" onClick={()=>context.openNav()}
              >
                <IoMenu />
              </Button>

              <Menu
                anchorEl={isOpennotificationDrop}
                className="notifications dropdown_list"
                id="notifications"
                open={openNotifications}
                onClose={handleClosenotificationsDrop}
                onClick={handleClosenotificationsDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head ps-3 pb-0">
                  <h4>Notifications (12)</h4>
                </div>

                <Divider className="mb-1" />

                <div className="scroll">
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={Emily} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Emily</b>
                            placed an order for
                            <b> 3 Zinger Burgers</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>just now!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={ChefSara} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chef Sara</b>
                            marked
                            <b> Grilled Salmon</b>
                            as ready to serve
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>1 minute ago!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={Alice} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Alice</b>
                            updated the price of
                            <b> Margherita Pizza</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>2 minutes ago!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={Table5} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Table 5</b>
                            ordered
                            <b> 2 Mango Smoothies</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>3 minutes ago!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={Michael} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Michael</b>
                            added
                            <b> Chicken Shawarma</b>
                            to his favorites list
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>5 minutes ago!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={WaiterBen} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Waiter Ben</b>
                            completed service for
                            <b> Table 7</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>12 minutes ago!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg" style={{ border: "none" }}>
                          <span className="rounded-circle">
                            <img src={John} />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>John</b>
                            placed an order for
                            <b> 3 Chicken Biryani</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">
                          <em>20 minutes ago!</em>
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                </div>

                <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                  <Button className="btn-purpel w-100">
                    View all Notifications
                  </Button>
                </div>
              </Menu>
            </div>

            <div className="myAccWrapper">
              <Button
                className="myAcc d-flex align-items-center"
                onClick={handleOpenMyAccDrop}
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src={Profile} />
                  </span>
                </div>

                <div className="userInfo res-hide">
                  <h4>David Warner</h4>
                  <p className="mb-0">@davidw37</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMyAcc}
                onClose={handleCloseMyAccDrop}
                onClick={handleCloseMyAccDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
