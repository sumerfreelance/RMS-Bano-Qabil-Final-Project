import React, { useState } from "react";
import "./StockPage.css";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const initialData = [
    { code: "V12", name: "Broccoli", item: "🥦", category: "Vegetable", quantity: "5 Kg" },
    { code: "V13", name: "Lemon", item: "🍋", category: "Vegetable", quantity: "6 Kg" },
    { code: "S6", name: "Hot Pepper", item: "🌶️", category: "Spice", quantity: "5 Kg" },
    { code: "V19", name: "Carrot", item: "🥕", category: "Vegetable", quantity: "4 Kg" },
    { code: "M3", name: "Chicken", item: "🍗", category: "Meat", quantity: "15 Kg" },
    { code: "F1", name: "Apple", item: "🍏", category: "Fruit", quantity: "5 Kg" },
    { code: "M2", name: "Fish", item: "🐟", category: "Meat", quantity: "6 Kg" },
    { code: "F2", name: "Potato", item: "🥔", category: "Vegetable", quantity: "4 Kg" },
];

const StockPage = () => {
    const [stockData, setStockData] = useState(initialData);
    const [newItem, setNewItem] = useState({ code: "", name: "", item: "", category: "", quantity: "" });
    const [editingItem, setEditingItem] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prev => ({ ...prev, [name]: value }));
    };

    const handleAddItem = () => {
        setStockData(prev => [...prev, { ...newItem, code: Date.now().toString() }]);
        setNewItem({ code: "", name: "", item: "", category: "", quantity: "" });
        setShowAddModal(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingItem(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveEdit = () => {
        setStockData(prev => prev.map(item => (item.code === editingItem.code ? editingItem : item)));
        setEditingItem(null);
        setShowEditModal(false);
    };

    const handleDelete = (code) => {
        setStockData(prev => prev.filter(item => item.code !== code));
    };

    const filteredData = stockData
        .filter(item =>
            (filterCategory === "All" || item.category === filterCategory) &&
            (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.item.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    return (
        <div className="main">
            <div className="stock-nav">
                <div className="stock-item">
                    <h2>Total Items: {filteredData.length}</h2>
                </div>
                <div className="stock-filter">
                    <FilterAltOutlinedIcon />
                    <select
                        className="filter-select"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Vegetable">Vegetable</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Meat">Meat</option>
                        <option value="Spice">Spice</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search items"
                        className="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <SearchIcon className="search-icon" />
                </div>
                <button className="add-btn" onClick={() => setShowAddModal(true)}>Add New Item</button>
            </div>

            {/* Add Item Modal */}
            {showAddModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowAddModal(false)}>&times;</span>
                        <h3>Add New Item</h3>
                        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} placeholder="Item Name" />
                        <input type="text" name="item" value={newItem.item} onChange={handleInputChange} placeholder="Item Emoji" />
                        <input type="text" name="category" value={newItem.category} onChange={handleInputChange} placeholder="Category" />
                        <input type="text" name="quantity" value={newItem.quantity} onChange={handleInputChange} placeholder="Quantity" />
                        <button onClick={handleAddItem}>Add Item</button>
                    </div>
                </div>
            )}

            {/* Edit Item Modal */}
            {showEditModal && editingItem && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowEditModal(false)}>&times;</span>
                        <h3>Edit Item</h3>
                        <input type="text" name="name" value={editingItem.name} onChange={handleEditChange} placeholder="Item Name" />
                        <input type="text" name="item" value={editingItem.item} onChange={handleEditChange} placeholder="Item Emoji" />
                        <input type="text" name="category" value={editingItem.category} onChange={handleEditChange} placeholder="Category" />
                        <input type="text" name="quantity" value={editingItem.quantity} onChange={handleEditChange} placeholder="Quantity" />
                        <button onClick={handleSaveEdit}>Save Changes</button>
                    </div>
                </div>
            )}

            <table className="item-table">
                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.item}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button
                                    className="stock-edit-btn"
                                    aria-label={`Edit ${item.name}`}
                                    onClick={() => { setEditingItem(item); setShowEditModal(true); }}
                                >
                                    <EditOutlinedIcon />
                                </button>
                                <button
                                    className="stock-btn-dlt"
                                    aria-label={`Delete ${item.name}`}
                                    onClick={() => handleDelete(item.code)}
                                >
                                    <DeleteOutlinedIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockPage;
