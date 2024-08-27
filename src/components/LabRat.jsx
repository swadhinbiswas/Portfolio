import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function LabRat() {
  return (
    <div className="flex items-center mb-2">
      <BusinessIcon className="text-gray-400 mr-2" />
      <Link to="https://github.com/TheBoringRats" target="_blank" rel="noopener noreferrer">
        <span className="text-gray-400">TheBoringRats</span>
      </Link>
    </div>
  );
}

export default LabRat;