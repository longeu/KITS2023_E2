import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";
import "./Admin.scss";
const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideMenu />
      </div>
      <div className="admin-content">
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
