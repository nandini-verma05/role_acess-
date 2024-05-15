import React from 'react';
import './UserPage.css'; // Import your CSS file for styling

const UserPage = () => {
  return (
    <div className="user-page">
      <h2>Welcome, User!</h2>
      <div className="user-info">
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        {/* Add more user information here */}
      </div>
      <div className="user-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
        {/* Add more user actions/buttons here */}
      </div>
    </div>
  );
};

export default UserPage;
