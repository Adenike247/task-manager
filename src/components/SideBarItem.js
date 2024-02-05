import React from 'react'
import Dashboard from '../assets/svg/Dashboard'
import classes from "../../styles/Sidebar.module.css"
const SideBarItem = ({navIcon,itemName}) => {
  return (
    <>
      <div className={classes.navItemContainer}>
              <div className={classes.navItemContainerRoot}> <span>
                  {navIcon}
              </span>
                  <h3 className={classes.iconTitle}>{itemName}</h3></div>
      </div>
    </>
  );
};

export default SideBarItem;
