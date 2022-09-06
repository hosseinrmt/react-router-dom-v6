import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <>
      <p>wellcome back!</p>
      <div className="sideBar">
        <SideBar />
        <Outlet />
        {/* <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="downloads" element={<Downloads />} />
        </Routes> */}
      </div>
    </>
  );
};

export default Profile;
