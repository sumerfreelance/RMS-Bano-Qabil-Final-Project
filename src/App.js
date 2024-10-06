import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Dashboard from "./pages/Dashboard";
import Kitchen from "./pages/Dashboard/components/kitchen/kitchen";
import MenuComponent from "./pages/Dashboard/components/menu/menu";
import Staff from "./pages/Dashboard/components/staff/staff";
import MasterSection from "./pages/Dashboard/components/MasterSection/MasterSection";
import OrderPage from "./pages/Dashboard/components/OrderPage/OrderPage";
import StockPage from "./pages/Dashboard/components/StockPage/StockPage";
import SettingPage from "./pages/Dashboard/components/SettingPage/SettingPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const[isOpenNav, setIsOpenNav] = useState(false);

  

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

  return()=>{
    window.removeEventListener('resize', handleResize);
  };
  }, []);

  const openNav=()=>{
    setIsOpenNav(true);
  }

  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header />
      <div className="main d-flex">
        <>
        <div className={`sidebarOverlay d-none ${isOpenNav===true && 'show'}`} onClick={()=>setIsOpenNav(false)}></div>
        <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''} ${isOpenNav===true ? 'open' : ''}`}>
          <Sidebar />
        </div>
        </>

        <div className={`content ${isToggleSidebar===true ? 'toggle' : ''}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/Dashboard" exact={true} element={<Dashboard />} />
            <Route path="/Kitchen" exact={true} element={<Kitchen />} />
            <Route path="/MenuItems" exact={true} element={<MenuComponent />} />
            <Route path="/Staff" exact={true} element={<Staff />} />
            <Route path="/Master" exact={true} element={<MasterSection />} />
            <Route path="/Orders" exact={true} element={<OrderPage />} />
            <Route path="/Stock" exact={true} element={<StockPage />} />
            <Route path="/Setting" exact={true} element={<SettingPage />} />
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
