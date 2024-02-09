import React from "react";
import { toast } from "react-toastify";
import Popup from "./Popup";
import Button from "./Button";
import classes from "../../styles/DeleteTask.module.css";
const DeleteTask = ({ closeModal, tasks, taskId, setTasks, deleteTask }) => {
  const handleDelete = () => {
    const newTasks = tasks.filter((task) => task.id !== deleteTask.id);
    setTasks(newTasks);
    localStorage.setItem("items", JSON.stringify(newTasks));
    toast.success("Deleted Successfully");
    closeModal();
  };
  
  return (
    <>
      <Popup closeModal={closeModal}>
        <div className={classes.pageRoot}>
          <h3 className={classes.header}>Are you sure you want to delete!</h3>
          <div className={classes.btnContainer}>
            <div onClick={() => handleDelete()} className={classes.yesBtn}>
              <Button>Yes</Button>
            </div>
            <div onClick={closeModal} className={classes.noBtn}>
              <Button>No</Button>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default DeleteTask;
