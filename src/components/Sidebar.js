import React from 'react'
import classes from "../../styles/Sidebar.module.css"
import Logo from '../assets/svg/Logo'
import SideBarItem from './SideBarItem'
import { navItemContent } from '../data'
const Sidebar = () => {
  return (
    <>
      <div className={classes.pageRoot}>
        <div className={classes.logoContainer}>
          <Logo />
          <h3 className={classes.header}>Task Manager</h3>
        </div>
        {navItemContent.map((item) => (
          <><SideBarItem navIcon={item.navIcon}
            itemName={item.itemName}
          /></>
        ))}
      </div>
    </>
  )
}

export default Sidebar
