import React, { useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import More from "../assets/svg/More";
import classes from "../../styles/TaskCard.module.css";
import MoreCard from "./MoreCard";
import { pendingAction } from "../data";
const PendingCard = ({
  title,
  description,
  dateRaisedText,
  dueDateText,
  memberName,
  dueDateIcon,
  dueRaisedIcon,
  tasks,
  setTasks,
  taskId,
}) => {
  const [showCard, setShowCard] = useState(false);
  const handleClick = (action) => {
    if (action === "Delete") {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
      localStorage.setItem("items", JSON.stringify(newTasks));
      toast.success("Deleted Successfully");
    }
    if (action === "Mark as done") {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: "done",
          };
        }
        return task;
      });
      setTasks(newTasks);
      localStorage.setItem("items", JSON.stringify(newTasks));
      toast.success("Successfully mark as Done");
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
            {pendingAction.map((item) => (
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

export default PendingCard;
