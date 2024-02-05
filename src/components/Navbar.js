import React from 'react'
import Menu from '../assets/svg/Menu'
import Bell from '../assets/svg/Bell'
import { profileImage } from '../assets/Images'
// import profileImage  from '../assets/png/Ellipse 4.png'
import classes from "../../styles/Navbar.module.css"
import Search from '../assets/svg/Search'
const Navbar = () => {
  return (
    <>
      <div className={classes.pageRoot}>
        <span className={classes.menuIcon}> <Menu /></span>
        <div className={classes.rightContainer}>
          <div className={classes.searchContainer}>
            <Search/>
            <input className={classes.inputField} type="text" placeholder='Search for anything...'/>
          </div>
          <Bell />
        </div>
      </div>
    </>
  )
}

export default Navbar
