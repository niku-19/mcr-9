import { NavLink } from "react-router-dom";
import styles from "./leftsidebar.module.css";

const LeftSidebar = () => {
  return (
    <div className={styles.left__sidebar__container}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.notActive
        }
      >
        <h1 className={styles.heading}>Dashboard</h1>
      </NavLink>
      <NavLink
        to={"/departement"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.notActive
        }
      >
        <h1 className={styles.heading}>Departments</h1>
      </NavLink>
      <NavLink
        to={"/product"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.notActive
        }
      >
        <h1 className={styles.heading}>Products</h1>
      </NavLink>
    </div>
  );
};

export default LeftSidebar;
