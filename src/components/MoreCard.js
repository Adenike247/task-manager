import React from 'react'
import classes from "../../styles/MoreCard.module.css"
const MoreCard = ({ textArea, iconImg}) => {
  return (
    <>
      <div className={classes.pageRoot}>
        <div className={classes.mainRoot}>
          <div className={classes.moreIconContainer}>
            <span>{iconImg}</span>
            <p className={classes.textArea}> {textArea}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreCard
