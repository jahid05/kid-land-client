import { NavLink } from "react-router-dom";

const TabBar = () => {
  return (
    <div>
      <div className="tabs tabs-boxed">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Car
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Car
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Car
        </NavLink>
      </div>
    </div>
  );
};

export default TabBar;
