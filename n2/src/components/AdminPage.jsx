import React from 'react';
import './AdminPage.css'; // Import your CSS file for styling

const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><a href="#users">Users</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#orders">Orders</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome, Admin!</h2>
        <p>This is the admin dashboard. You can manage users, products, orders, etc.</p>
        {/* Add more content and components here */}
      </div>
    </div>
  );
};

export default AdminPage;
