import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Downloads from "./components/Downloads";
import Layout from "./layout/Layout";
import Profile from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/blogs" />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="downloads" element={<Downloads />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
