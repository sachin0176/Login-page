import React, { Fragment } from "react";
import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {

  
  return (
    <Fragment>
      <header className={styles['main-header']}>
        <h1>A Typical Page</h1>
        <Navigation />
      </header>
    </Fragment>
  );
};

export default MainHeader;
