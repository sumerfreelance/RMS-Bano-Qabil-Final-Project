import React, { useState, useEffect } from "react";
import "./MasterSection.css";

const MasterSection = () => {
    const [staff, setStaff] = useState([]);
    const [orders, setOrders] = useState([]);
    const [stock, setStock] = useState([]);
    const [menu, setMenu] = useState([]);

    const [newStaff, setNewStaff] = useState({ name: "", role: "" });
    const [newOrder, setNewOrder] = useState({ customerName: "", orderDetails: "" });
    const [newStock, setNewStock] = useState({ code: "", name: "", item: "", category: "", quantity: "" });
    const [newMenu, setNewMenu] = useState({ name: "", price: "" });

    useEffect(() => {
        const storedStaff = JSON.parse(localStorage.getItem("staff")) || [];
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const storedStock = JSON.parse(localStorage.getItem("stock")) || [];
        const storedMenu = JSON.parse(localStorage.getItem("menu")) || [];

        setStaff(storedStaff);
        setOrders(storedOrders);
        setStock(storedStock);
        setMenu(storedMenu);
    }, []);

    const handleInputChange = (e, setState) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddStaff = () => {
        const updatedStaff = [...staff, newStaff];
        setStaff(updatedStaff);
        localStorage.setItem("staff", JSON.stringify(updatedStaff));
        setNewStaff({ name: "", role: "" });
    };

    const handleAddOrder = () => {
        const updatedOrders = [...orders, newOrder];
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        setNewOrder({ customerName: "", orderDetails: "" });
    };

    const handleAddStock = () => {
        const updatedStock = [...stock, { ...newStock, code: Date.now().toString() }];
        setStock(updatedStock);
        localStorage.setItem("stock", JSON.stringify(updatedStock));
        setNewStock({ code: "", name: "", item: "", category: "", quantity: "" });
    };

    const handleAddMenu = () => {
        const updatedMenu = [...menu, newMenu];
        setMenu(updatedMenu);
        localStorage.setItem("menu", JSON.stringify(updatedMenu));
        setNewMenu({ name: "", price: "" });
    };

    return (
        <div className="master-section">
            <h2>Master Section</h2>
            <div className="form-container">
                <h3>Add Staff</h3>
                <input type="text" name="name" value={newStaff.name} onChange={(e) => handleInputChange(e, setNewStaff)} placeholder="Staff Name" />
                <input type="text" name="role" value={newStaff.role} onChange={(e) => handleInputChange(e, setNewStaff)} placeholder="Staff Role" />
                <button className="custom-button" onClick={handleAddStaff}>Add Staff</button>
            </div>

            <div className="form-container">
                <h3>Add Order</h3>
                <input type="text" name="customerName" value={newOrder.customerName} onChange={(e) => handleInputChange(e, setNewOrder)} placeholder="Customer Name" />
                <input type="text" name="orderDetails" value={newOrder.orderDetails} onChange={(e) => handleInputChange(e, setNewOrder)} placeholder="Order Details" />
                <button className="custom-button" onClick={handleAddOrder}>Add Order</button>
            </div>

            <div className="form-container">
                <h3>Add Stock</h3>
                <input type="text" name="name" value={newStock.name} onChange={(e) => handleInputChange(e, setNewStock)} placeholder="Item Name" />
                <input type="text" name="item" value={newStock.item} onChange={(e) => handleInputChange(e, setNewStock)} placeholder="Item Emoji" />
                <input type="text" name="category" value={newStock.category} onChange={(e) => handleInputChange(e, setNewStock)} placeholder="Category" />
                <input type="text" name="quantity" value={newStock.quantity} onChange={(e) => handleInputChange(e, setNewStock)} placeholder="Quantity" />
                <button className="custom-button" onClick={handleAddStock}>Add Stock</button>
            </div>

            <div className="form-container">
                <h3>Add Menu Item</h3>
                <input type="text" name="name" value={newMenu.name} onChange={(e) => handleInputChange(e, setNewMenu)} placeholder="Menu Item Name" />
                <input type="text" name="price" value={newMenu.price} onChange={(e) => handleInputChange(e, setNewMenu)} placeholder="Price" />
                <button className="custom-button" onClick={handleAddMenu}>Add Menu Item</button>
            </div>
        </div>
    );
};

export default MasterSection;
