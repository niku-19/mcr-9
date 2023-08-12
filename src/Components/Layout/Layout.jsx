/* eslint-disable react/prop-types */
import LeftSidebar from "../Left Sidebar/LeftSidebar";
import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout__container}>
      <LeftSidebar />
      <div className={styles.main__Container}>{children}</div>
    </div>
  );
};

export default Layout;
