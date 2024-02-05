import React from "react";
import classes from "../../styles/Sidebar.module.css";
const SideBarItem = ({ sideIcon, itemName }) => {
  return (
    <>
      <div className={classes.navItemContainer}>
        <div className={classes.navItemContainerRoot}>
          <span>{sideIcon}</span>
          <h3 className={classes.iconTitle}>{itemName}</h3>
        </div>
      </div>
    </>
  );
};

export default SideBarItem;
