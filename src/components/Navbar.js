import React from 'react'
import Menu from '../assets/svg/Menu'
import Bell from '../assets/svg/Bell'
import classes from "../../styles/Navbar.module.css"
import Search from '../assets/svg/Search'
import { profileImg } from '../assets/Images'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
      <div className={classes.pageRoot}>
        <span className={classes.menuIcon}> <Menu /></span>

        <div className={classes.navContainer}>
          <d className={classes.dashboardText}>Dashboard</d>
          <div className={classes.rightContainer}>
            <div className={classes.searchContainer}>
              <Search />
              <input className={classes.inputField} type="text" placeholder='Search for anything...' />
            </div>
            <div className={classes.navIconContainer}><Bell />
              <Image src={profileImg} alt="profile-image" /></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
