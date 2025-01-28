import React from "react";

import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";


const Dashboard: React.FC = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 ">
        <Header />
        <div className="h-[93vh]  overflow-auto">
       {/* Your dashboard content goes here */}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
