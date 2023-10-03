import React,{useContext} from "react";
import styles from "./Navigation.module.css";
import AuthContext from "../../store/AuthContext";

const Navigation = () => {

    const cxt=useContext(AuthContext);
  return (
    <nav className={styles["nav"]}>
          <ul>
            {cxt.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {cxt.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {cxt.isLoggedIn && (
              <li>
                <button onClick={cxt.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
  );
};

export default Navigation;
