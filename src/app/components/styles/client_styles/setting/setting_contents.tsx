import React, { useState } from 'react';
import LeftSidebar from './setting_left_side';
import ClientAndBilling from './setting_right_side1';

const ClientContent: React.FC = () => {
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <LeftSidebar />
      {/* Right Content Area */}
      <ClientAndBilling/>
    </div>
  );
};

export default ClientContent;
