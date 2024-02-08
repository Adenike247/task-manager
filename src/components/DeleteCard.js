import React from "react";
import Popup from "./Popup";
import Button from "./Button";
import classes from "../../styles/DeleteCard.module.css";
const DeleteCard = ({ closeModal }) => {
  return (
    <>
      <Popup closeModal={closeModal}>
        <div className={classes.pageRoot}>
          <h3 className={classes.header}>Are you sure you want to delete!</h3>
          <div className={classes.btnContainer}>
            <div className={classes.yesBtn}>
              <Button>Yes</Button>
            </div>
            <div className={classes.noBtn}>
              <Button>No</Button>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default DeleteCard;
