import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DashboardBox from "./components/dashboardBox";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoReceipt } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";

const data = [
  { name: "Week 1", amount: 800 },
  { name: "Week 2", amount: 1200 },
  { name: "Week 3", amount: 1600 },
  { name: "Week 4", amount: 1000 },
];

const Dashboard = () => {
  const customColor = "#5E3FBE";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                h4={"Orders Processed"}
                span={277}
                h6={"last week"}
                color={["#a18cde", "#8366d9"]}
                icon={<MdAssignmentTurnedIn />}
                grow={true}
              />
              <DashboardBox
                h4={"Staff Performance"}
                span={"80%"}
                h6={"last month"}
                color={["#a18cde", "#8366d9"]}
                icon={<FaPeopleGroup />}
                grow={true}
              />
              <DashboardBox
                h4={"Total Orders"}
                span={1500}
                h6={"last month"}
                color={["#a18cde", "#8366d9"]}
                icon={<IoReceipt />}
              />
              <DashboardBox
                h4={"Kitchen Performance"}
                span={"70%"}
                h6={"last week"}
                color={["#a18cde", "#8366d9"]}
                icon={<MdOutlineRestaurantMenu />}
              />
            </div>
          </div>

          <div className="col-md-4 ps-0 topPart2">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="mb-0 mt-0">Total Sales</h6>
                <div className="ms-auto">
                  <Button className="ms-auto toggleIcon" onClick={handleClick}>
                    <BiDotsVerticalRounded />
                  </Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="font-weight-bold">$3,787,681.00</h3>
              <p>$3,578.90 in last month</p>

              <ResponsiveContainer width="100%" height={170}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke={customColor}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
