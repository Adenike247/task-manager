import React from "react";
import classes from "../../styles/Sidebar.module.css";
const SideBarItem = ({ sideIcon, itemName }) => {
  return (
    <>
      <div
        className={
          itemName === "Task"
            ? classes.taskContainer
            : classes.navItemContainer
        }
      >
        <div
          className={
            itemName === "Task"
              ? classes.taskContainer
              : classes.navItemContainerRoot
          }
        >
          <span>{sideIcon}</span>
          <h3
            className={
              itemName === "Task" ? classes.taskName : classes.iconTitle
            }
          >
            {itemName}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SideBarItem;
