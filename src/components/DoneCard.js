import React, { useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import More from "../assets/svg/More";
import classes from "../../styles/TaskCard.module.css";
import MoreCard from "./MoreCard";
import { doneAction } from "../data";
const DoneCard = ({
  title,
  description,
  dateRaisedText,
  dueDateText,
  memberName,
  dueDateIcon,
  dueRaisedIcon,
  tasks,
  setDeleteTask,
  setTasks,
  taskId,
  task,
  setUpdatedTask,
}) => {
  const [showCard, setShowCard] = useState(false);
  const handleClick = (action) => {
    if (action === "Delete") {
      setDeleteTask(true);
      setUpdatedTask(task);
    }
    if (action === "Move to Pending") {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: "pending",
          };
        }
        return task;
      });
      setTasks(newTasks);
      localStorage.setItem("items", JSON.stringify(newTasks));
      toast.success("Successfully move to Pending");
    }
  };
  return (
    <>
      <div className={classes.taskCardContainer}>
        <div className={classes.taskCard}>
          <h3 className={classes.userName}>{memberName}</h3>
          <div
            onClick={() => {
              setShowCard(!showCard);
            }}
          >
            <More />
          </div>
        </div>
        {showCard && (
          <div className={classes.moreCardContainer}>
            {doneAction.map((item) => (
              <>
                <MoreCard
                  handleClick={() => handleClick(item.itemName)}
                  iconImg={item.sideIcon}
                  textArea={item.itemName}
                />
              </>
            ))}
          </div>
        )}
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <div className={classes.dateContainer}>
          <div className={classes.dueDateWrap}>
            {dueRaisedIcon}
            <span className={classes.dateRaisedText}>Date Raised:</span>
            <h3 className={classes.dateRaisedText}>
              {moment(dateRaisedText).format("YYYY-MM-DD")}
            </h3>
          </div>
          <div className={classes.dueDateWrap}>
            {dueDateIcon}
            <span className={classes.dueDate}>Due Date:</span>
            <h3 className={classes.dueDate}>{dueDateText}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoneCard;
