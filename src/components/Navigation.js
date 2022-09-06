import { NavLink, useParams } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
];

const Navigation = () => {
  const params = useParams();
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
