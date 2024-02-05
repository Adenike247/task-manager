import React from 'react'
import Menu from '../assets/svg/Menu'
import Bell from '../assets/svg/Bell'
import { profileImage } from '../assets/Images'
// import profileImage  from '../assets/png/Ellipse 4.png'
import classes from "../../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <>
      <div className={classes.pageRoot}>
        <Menu />
        <div>
          <Bell />
        </div>
      </div>
    </>
  )
}

export default Navbar
