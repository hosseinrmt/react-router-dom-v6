import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <ul className="aside">
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab" : "")}
            to="/profile/dashboard"
          >
            dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab" : "")}
            to="/profile/downloads"
          >
            downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
