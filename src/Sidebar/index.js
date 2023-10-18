import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header"> Dashboard</div>

        <div className="sidebar-links">
          <div>
            <div>Dashboard</div>
          </div>
          <div>
            <div>Product</div>
          </div>
          <div>
            <div>Customerrs</div>
          </div>
          <div>
            <div>Income</div>
          </div>
          <div>
            <div>Promote</div>
          </div>
          <div>
            <div>Help</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
