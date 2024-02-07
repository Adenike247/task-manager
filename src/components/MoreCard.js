import React from "react";
import classes from "../../styles/MoreCard.module.css";
const MoreCard = ({ textArea, iconImg, handleClick }) => {
  return (
    <>
      <div className={classes.pageRoot}>
        <div onClick={handleClick} className={classes.moreIconContainer}>
          <span>{iconImg}</span>
          <p className={classes.textArea}> {textArea}</p>
        </div>
      </div>
    </>
  );
};

export default MoreCard;
