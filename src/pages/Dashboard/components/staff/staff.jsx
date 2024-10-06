import React, { useState } from 'react';
import './staff.css';
const staffData = [
    // Karachi Staff
    {
        id: 111,
        name: 'Ahmed Khan',
        position: 'Head Chef',
        city: 'Karachi',
        experience: 12,
        contact: 'ahmed.k@restaurant.com',
        availability: 'Full-time',
        salary: 80000,
    },
    {
        id: 112,
        name: 'Mehwish Iqbal',
        position: 'Cashier',
        city: 'Karachi',
        experience: 3,
        contact: 'mehwish.i@restaurant.com',
        availability: 'Full-time',
        salary: 40000,
    },
    {
        id: 113,
        name: 'Fahad Mustafa',
        position: 'Waiter',
        city: 'Karachi',
        experience: 5,
        contact: 'fahad.m@restaurant.com',
        availability: 'Part-time',
        salary: 25000,
    },
    {
        id: 114,
        name: 'Zainab Ali',
        position: 'Hostess',
        city: 'Karachi',
        experience: 2,
        contact: 'zainab.a@restaurant.com',
        availability: 'Full-time',
        salary: 35000,
    },
    {
        id: 115,
        name: 'Asim Raza',
        position: 'Manager',
        city: 'Karachi',
        experience: 10,
        contact: 'asim.r@restaurant.com',
        availability: 'Full-time',
        salary: 120000,
    },
    {
        id: 116,
        name: 'Saima Khan',
        position: 'Sous Chef',
        city: 'Karachi',
        experience: 6,
        contact: 'saima.k@restaurant.com',
        availability: 'Full-time',
        salary: 60000,
    },
    {
        id: 117,
        name: 'Hassan Ali',
        position: 'Cleaner',
        city: 'Karachi',
        experience: 2,
        contact: 'hassan.a@restaurant.com',
        availability: 'Part-time',
        salary: 20000,
    },
    {
        id: 118,
        name: 'Zeeshan Tariq',
        position: 'Security Guard',
        city: 'Karachi',
        experience: 8,
        contact: 'zeeshan.t@restaurant.com',
        availability: 'Full-time',
        salary: 50000,
    },
    {
        id: 119,
        name: 'Saba Qureshi',
        position: 'Receptionist',
        city: 'Karachi',
        experience: 4,
        contact: 'saba.q@restaurant.com',
        availability: 'Full-time',
        salary: 45000,
    },
    {
        id: 1110,
        name: 'Farhan Malik',
        position: 'Dishwasher',
        city: 'Karachi',
        experience: 1,
        contact: 'farhan.m@restaurant.com',
        availability: 'Part-time',
        salary: 18000,
    },
    {
        id: 1111,
        name: 'Adnan Shah',
        position: 'Waiter',
        city: 'Karachi',
        experience: 4,
        contact: 'adnan.s@restaurant.com',
        availability: 'Full-time',
        salary: 30000,
    },

    // Lahore Staff
    {
        id: 1012,
        name: 'Ayesha Tariq',
        position: 'Sous Chef',
        city: 'Lahore',
        experience: 8,
        contact: 'ayesha.t@restaurant.com',
        availability: 'Full-time',
        salary: 65000,
    },
    {
        id: 1013,
        name: 'Faisal Mahmood',
        position: 'Cleaner',
        city: 'Lahore',
        experience: 2,
        contact: 'faisal.m@restaurant.com',
        availability: 'Part-time',
        salary: 22000,
    },
    {
        id: 1014,
        name: 'Nida Yasir',
        position: 'Waitress',
        city: 'Lahore',
        experience: 3,
        contact: 'nida.y@restaurant.com',
        availability: 'Part-time',
        salary: 28000,
    },
    {
        id: 1015,
        name: 'Haris Munir',
        position: 'Manager',
        city: 'Lahore',
        experience: 9,
        contact: 'haris.m@restaurant.com',
        availability: 'Full-time',
        salary: 130000,
    },
    {
        id: 1016,
        name: 'Zara Khan',
        position: 'Waitress',
        city: 'Lahore',
        experience: 4,
        contact: 'zara.k@restaurant.com',
        availability: 'Part-time',
        salary: 32000,
    },
    {
        id: 1017,
        name: 'Talha Ali',
        position: 'Waiter',
        city: 'Lahore',
        experience: 6,
        contact: 'talha.a@restaurant.com',
        availability: 'Full-time',
        salary: 42000,
    },
    {
        id: 1018,
        name: 'Kashan Malik',
        position: 'Security Guard',
        city: 'Lahore',
        experience: 7,
        contact: 'kashan.m@restaurant.com',
        availability: 'Full-time',
        salary: 55000,
    },
    {
        id: 1019,
        name: 'Sobia Iqbal',
        position: 'Chef',
        city: 'Lahore',
        experience: 5,
        contact: 'sobia.i@restaurant.com',
        availability: 'Full-time',
        salary: 70000,
    },
    {
        id: 1020,
        name: 'Ibrahim Khan',
        position: 'Dishwasher',
        city: 'Lahore',
        experience: 1,
        contact: 'ibrahim.k@restaurant.com',
        availability: 'Part-time',
        salary: 20000,
    },

    // Gilgit Staff
    {
        id: 721,
        name: 'Sohail Ahmed',
        position: 'Manager',
        city: 'Gilgit',
        experience: 10,
        contact: 'sohail.a@restaurant.com',
        availability: 'Full-time',
        salary: 140000,
    },
    {
        id: 722,
        name: 'Rizwan Ali',
        position: 'Assistant Manager',
        city: 'Gilgit',
        experience: 6,
        contact: 'rizwan.a@restaurant.com',
        availability: 'Full-time',
        salary: 90000,
    },
    {
        id: 723,
        name: 'Shamaila Tariq',
        position: 'Waitress',
        city: 'Gilgit',
        experience: 4,
        contact: 'shamaila.t@restaurant.com',
        availability: 'Part-time',
        salary: 35000,
    },
    {
        id: 724,
        name: 'Bilal Aslam',
        position: 'Chef',
        city: 'Gilgit',
        experience: 7,
        contact: 'bilal.a@restaurant.com',
        availability: 'Full-time',
        salary: 75000,
    },
    {
        id: 725,
        name: 'Hafsa Noor',
        position: 'Hostess',
        city: 'Gilgit',
        experience: 2,
        contact: 'hafsa.n@restaurant.com',
        availability: 'Full-time',
        salary: 40000,
    },
    {
        id: 726,
        name: 'Waseem Iqbal',
        position: 'Waiter',
        city: 'Gilgit',
        experience: 3,
        contact: 'waseem.i@restaurant.com',
        availability: 'Part-time',
        salary: 28000,
    },
    {
        id: 727,
        name: 'Fahim Khan',
        position: 'Cleaner',
        city: 'Gilgit',
        experience: 2,
        contact: 'fahim.k@restaurant.com',
        availability: 'Part-time',
        salary: 22000,
    },

    // Kashmir Staff
    {
        id: 1128,
        name: 'Sara Zafar',
        position: 'Waitress',
        city: 'Kashmir',
        experience: 4,
        contact: 'sara.z@restaurant.com',
        availability: 'Part-time',
        salary: 32000,
    },
    {
        id: 1129,
        name: 'Aqsa Riaz',
        position: 'Hostess',
        city: 'Kashmir',
        experience: 3,
        contact: 'aqsa.r@restaurant.com',
        availability: 'Part-time',
        salary: 30000,
    },
    {
        id: 1130,
        name: 'Hamza Javed',
        position: 'Waiter',
        city: 'Kashmir',
        experience: 5,
        contact: 'hamza.j@restaurant.com',
        availability: 'Part-time',
        salary: 38000,
    },
    {
        id: 1131,
        name: 'Maham Khan',
        position: 'Receptionist',
        city: 'Kashmir',
        experience: 3,
        contact: 'maham.k@restaurant.com',
        availability: 'Full-time',
        salary: 45000,
    },
    {
        id: 1132,
        name: 'Ali Raza',
        position: 'Chef',
        city: 'Kashmir',
        experience: 8,
        contact: 'ali.r@restaurant.com',
        availability: 'Full-time',
        salary: 80000,
    },
    {
        id: 1133,
        name: 'Noman Ali',
        position: 'Dishwasher',
        city: 'Kashmir',
        experience: 2,
        contact: 'noman.a@restaurant.com',
        availability: 'Part-time',
        salary: 20000,
    },
    {
        id: 1134,
        name: 'Ishaque Butt',
        position: 'Security Guard',
        city: 'Kashmir',
        experience: 6,
        contact: 'ishaque.b@restaurant.com',
        availability: 'Full-time',
        salary: 60000,
    },

    // Quetta Staff
    {
        id: 1735,
        name: 'Bilal Khan',
        position: 'Chef',
        city: 'Quetta',
        experience: 7,
        contact: 'bilal.k@restaurant.com',
        availability: 'Full-time',
        salary: 75000,
    },
    {
        id: 1736,
        name: 'Imran Javed',
        position: 'Bartender',
        city: 'Quetta',
        experience: 4,
        contact: 'imran.j@restaurant.com',
        availability: 'Full-time',
        salary: 50000,
    },
    {
        id: 1737,
        name: 'Mansoor Ahmed',
        position: 'Waiter',
        city: 'Quetta',
        experience: 6,
        contact: 'mansoor.a@restaurant.com',
        availability: 'Part-time',
        salary: 42000,
    },
    {
        id: 1738,
        name: 'Ayesha Bibi',
        position: 'Hostess',
        city: 'Quetta',
        experience: 3,
        contact: 'ayesha.b@restaurant.com',
        availability: 'Full-time',
        salary: 40000,
    },
    {
        id: 1739,
        name: 'Farooq Khan',
        position: 'Manager',
        city: 'Quetta',
        experience: 9,
        contact: 'farooq.k@restaurant.com',
        availability: 'Full-time',
        salary: 130000,
    },
    {
        id: 1740,
        name: 'Shahid Iqbal',
        position: 'Cleaner',
        city: 'Quetta',
        experience: 2,
        contact: 'shahid.i@restaurant.com',
        availability: 'Part-time',
        salary: 22000,
    },
    {
        id: 1741,
        name: 'Zubair Tariq',
        position: 'Security Guard',
        city: 'Quetta',
        experience: 8,
        contact: 'zubair.t@restaurant.com',
        availability: 'Full-time',
        salary: 65000,
    },

    // Gujranwala Staff
    {
        id: 742,
        name: 'Naveed Khan',
        position: 'Head Chef',
        city: 'Gujranwala',
        experience: 12,
        contact: 'naveed.k@restaurant.com',
        availability: 'Full-time',
        salary: 90000,
    },
    {
        id: 743,
        name: 'Samreen Malik',
        position: 'Cashier',
        city: 'Gujranwala',
        experience: 4,
        contact: 'samreen.m@restaurant.com',
        availability: 'Full-time',
        salary: 45000,
    },
    {
        id: 744,
        name: 'Junaid Aslam',
        position: 'Waiter',
        city: 'Gujranwala',
        experience: 5,
        contact: 'junaid.a@restaurant.com',
        availability: 'Part-time',
        salary: 35000,
    },
    {
        id: 745,
        name: 'Tariq Mehmood',
        position: 'Dishwasher',
        city: 'Gujranwala',
        experience: 2,
        contact: 'tariq.m@restaurant.com',
        availability: 'Part-time',
        salary: 20000,
    },
    {
        id: 746,
        name: 'Shamim Akhtar',
        position: 'Manager',
        city: 'Gujranwala',
        experience: 11,
        contact: 'shamim.a@restaurant.com',
        availability: 'Full-time',
        salary: 140000,
    },
    {
        id: 747,
        name: 'Kashif Riaz',
        position: 'Cleaner',
        city: 'Gujranwala',
        experience: 3,
        contact: 'kashif.r@restaurant.com',
        availability: 'Part-time',
        salary: 25000,
    },
    {
        id: 748,
        name: 'Umer Saeed',
        position: 'Bartender',
        city: 'Gujranwala',
        experience: 6,
        contact: 'umer.s@restaurant.com',
        availability: 'Full-time',
        salary: 60000,
    },

    // Additional staff
    {
        id: 949,
        name: 'Yasir Shah',
        position: 'Waiter',
        city: 'Karachi',
        experience: 3,
        contact: 'yasir.s@restaurant.com',
        availability: 'Part-time',
        salary: 28000,
    },
    {
        id: 950,
        name: 'Hina Rizvi',
        position: 'Waitress',
        city: 'Lahore',
        experience: 4,
        contact: 'hina.r@restaurant.com',
        availability: 'Full-time',
        salary: 42000,
    },
    {
        id: 951,
        name: 'Ali Haider',
        position: 'Chef',
        city: 'Gilgit',
        experience: 5,
        contact: 'ali.h@restaurant.com',
        availability: 'Full-time',
        salary: 70000,
    },
    {
        id: 952,
        name: 'Rida Khan',
        position: 'Receptionist',
        city: 'Kashmir',
        experience: 3,
        contact: 'rida.k@restaurant.com',
        availability: 'Full-time',
        salary: 45000,
    },
    {
        id: 953,
        name: 'Faraz Ahmed',
        position: 'Host',
        city: 'Karachi',
        experience: 2,
        contact: 'faraz.a@restaurant.com',
        availability: 'Full-time',
        salary: 35000,
    },
    {
        id: 954,
        name: 'Zahid Malik',
        position: 'Security Guard',
        city: 'Quetta',
        experience: 7,
        contact: 'zahid.m@restaurant.com',
        availability: 'Full-time',
        salary: 65000,
    },
    {
        id: 955,
        name: 'Hassan R aza',
        position: 'Dishwasher',
        city: 'Lahore',
        experience: 2,
        contact: 'hassan.r@restaurant.com',
        availability: 'Part-time',
        salary: 20000,
    },
    {
        id: 956,
        name: 'Irfan Butt',
        position: 'Cleaner',
        city: 'Gilgit',
        experience: 3,
        contact: 'irfan.b@restaurant.com',
        availability: 'Part-time',
        salary: 25000,
    },
    {
        id: 957,
        name: 'Ali Nawaz',
        position: 'Waiter',
        city: 'Quetta',
        experience: 4,
        contact: 'ali.n@restaurant.com',
        availability: 'Full-time',
        salary: 42000,
    },
    {
        id: 958,
        name: 'Sara Ahmed',
        position: 'Receptionist',
        city: 'Karachi',
        experience: 5,
        contact: 'sara.a@restaurant.com',
        availability: 'Full-time',
        salary: 50000,
    },
    {
        id: 959,
        name: 'Faisal Rehman',
        position: 'Manager',
        city: 'Gujranwala',
        experience: 9,
        contact: 'faisal.r@restaurant.com',
        availability: 'Full-time',
        salary: 130000,
    },
    {
        id: 960,
        name: 'Nida Amin',
        position: 'Chef',
        city: 'Kashmir',
        experience: 7,
        contact: 'nida.a@restaurant.com',
        availability: 'Full-time',
        salary: 75000,
    },
    {
        id: 961,
        name: 'Usman Tariq',
        position: 'Host',
        city: 'Lahore',
        experience: 3,
        contact: 'usman.t@restaurant.com',
        availability: 'Part-time',
        salary: 30000,
    },
    {
        id: 962,
        name: 'Tariq Shah',
        position: 'Dishwasher',
        city: 'Karachi',
        experience: 2,
        contact: 'tariq.s@restaurant.com',
        availability: 'Part-time',
        salary: 20000,
    },
    {
        id: 963,
        name: 'Hamna Zubair',
        position: 'Hostess',
        city: 'Gujranwala',
        experience: 4,
        contact: 'hamna.z@restaurant.com',
        availability: 'Part-time',
        salary: 35000,
    },
    {
        id: 964,
        name: 'Adeel Khan',
        position: 'Security Guard',
        city: 'Karachi',
        experience: 6,
        contact: 'adeel.k@restaurant.com',
        availability: 'Full-time',
        salary: 60000,
    },
    {
        id: 965,
        name: 'Shumaila Qadir',
        position: 'Waitress',
        city: 'Quetta',
        experience: 3,
        contact: 'shumaila.q@restaurant.com',
        availability: 'Full-time',
        salary: 40000,
    },
    {
        id: 966,
        name: 'Imtiaz Ahmed',
        position: 'Manager',
        city: 'Quetta',
        experience: 10,
        contact: 'imtiaz.a@restaurant.com',
        availability: 'Full-time',
        salary: 140000,
    },
    {
        id: 967,
        name: 'Kiran Ali',
        position: 'Hostess',
        city: 'Lahore',
        experience: 4,
        contact: 'kiran.a@restaurant.com',
        availability: 'Part-time',
        salary: 35000,
    },
    {
        id: 968,
        name: 'Zafar Iqbal',
        position: 'Cleaner',
        city: 'Gujranwala',
        experience: 2,
        contact: 'zafar.i@restaurant.com',
        availability: 'Part-time',
        salary: 22000,
    },
    {
        id: 969,
        name: 'Rizwana Khan',
        position: 'Bartender',
        city: 'Lahore',
        experience: 5,
        contact: 'rizwana.k@restaurant.com',
        availability: 'Full-time',
        salary: 60000,
    },
    {
        id: 970,
        name: 'Jawad Ali',
        position: 'Chef',
        city: 'Gilgit',
        experience: 8,
        contact: 'jawad.a@restaurant.com',
        availability: 'Full-time',
        salary: 80000,
    },
];

function Staff() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    // const [filteredStaff, setFilteredStaff] = useState(staffData);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    // Combine both search and city filter
    const filteredStaffs = staffData.filter((staff) => {
        const matchesCity =
            selectedCity === '' ||
            staff.city.toLowerCase() === selectedCity.toLowerCase();
        const matchesSearch = staff.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCity && matchesSearch;
    });

    return (
        <div className="container">
            <h1>Restaurant Staff</h1>
            <div className="search-bar">
                <h2>Total Staff : {staffData.length}</h2>

                {/* City Dropdown */}
                <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    className="select"
                >
                    <option value="">All Cities</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Gilgit">Gilgit</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Kashmir">Kashmir</option>
                </select>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <table className="staff-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Availability</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStaffs.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.name}</td>
                            <td>{staff.id}</td>
                            <td>{staff.position}</td>
                            <td>{staff.salary}</td>
                            <td>{staff.availability}</td>
                            <td>{staff.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Staff;
