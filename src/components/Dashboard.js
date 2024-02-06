import React, { useState } from "react";
import Navbar from "./Navbar";
import classes from "../../styles/Dashboard.module.css";
import Plus from "../assets/svg/Plus";
// import TaskCard from "./TaskCard";
import TodoIcon from "../assets/svg/TodoIcon";
import Dropdown from "../assets/svg/Dropdown";
import { taskContent, todoCardAction } from "../data";
import Sidebar from "./Sidebar";
import Done from "../assets/svg/Done";
import Progress from "../assets/svg/Progress";
import TodoCard from "./TodoCard";
import PendingCard from "./PendingCard";
import DoneCard from "./DoneCard";
import CreateTask from "./CreateTask";
import MoreCard from "./MoreCard";
import Image from "next/image";
import { noTask } from "../assets/Images";
const Dashboard = () => {
  const [showCard, setShowCard] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className={classes.dashboardContainer}>
        <div className={classes.sideBarContainer}>
          <Sidebar />
        </div>
        <div>
          <div className={classes.pageRoot}>
            <Navbar />
            <h3 className={classes.header}>Dashboard</h3>
            <div className={classes.createTaskContainer}>
              <div onClick={openModal} className={classes.createTaskBtn}>
                <Plus />
                <h3 className={classes.createTask}>New Task</h3>
              </div>
            </div>
            {isOpen && (
              <>
                <div >
                  <CreateTask closeModal={closeModal} />
                </div>
              </>
            )}
          </div>
          <div className={classes.whiteCard}>
            <div className={classes.greyCard}>
              <div className={classes.todoWrapperContainer}>
                <div className={classes.todoWrapper}>
                  <TodoIcon />
                  <h3 className={classes.taskHeader}>Todo</h3>
                </div>
                <div onClick={() => {
                  setShowCard(!showCard);
                }} className={classes.dropDownIcon}>
                  <Dropdown />
                </div>

              </div>
              {showCard && (<div className={classes.moreCardContainer}>
                {todoCardAction.map((item) => (
                  <>
                    <MoreCard
                      iconImg={item.sideIcon}
                      textArea={item.itemName}
                    />
                  </>
                ))}

              </div>)}
              {/* {taskContent.map((item) => (
                <>
                  <TodoCard
                    description={item.decription}
                    dueDate={item.dueDate}
                    memberName={item.mebemberName}
                    dueRaisedIcon={item.dateRaisedIcon}
                    dateRaisedText={item.dateRaisedText}
                    dueDateIcon={item.dueDateIcon}
                    dueDateText={item.dueDateText}
                  />
                </>
              ))} */}
              <div className={classes.noTaskContainer}>
                <Image src={noTask} alt="Empty" />
                <h3 className={classes.noTaskText}>No Task Found!</h3>
              </div>
            </div>
            <div className={classes.otherTask}>
              <div className={classes.pendingCard}>
                <div className={classes.pendWrapperContainer}>
                  <div className={classes.todoWrapper}>
                    <Progress />
                    <h3 className={classes.taskHeader}>Pending</h3>
                  </div>
                  <div onClick={() => {
                    setShowCard(!showCard);
                  }} className={classes.dropDownIcon}>
                    <Dropdown />
                  </div>
                </div>
                {/* {taskContent.map((item) => (
                  <>
                    <PendingCard
                      description={item.decription}
                      dueDate={item.dueDate}
                      memberName={item.mebemberName}
                      dueRaisedIcon={item.dateRaisedIcon}
                      dateRaisedText={item.dateRaisedText}
                      dueDateIcon={item.dueDateIcon}
                      dueDateText={item.dueDateText}
                    />
                  </>
                ))} */}
                <div className={classes.noTaskContainer}>
                  <Image src={noTask} alt="Empty" />
                  <h3 className={classes.noTaskText}>No Task Found!</h3>
                </div>
              </div>
              <div className={classes.doneCard}>
                <div className={classes.doneWrapperContainer}>
                  <div className={classes.todoWrapper}>
                    <Done />
                    <h3 className={classes.taskHeader}>Done</h3>
                  </div>
                  <div onClick={() => {
                    setShowCard(!showCard);
                  }} className={classes.dropDownIcon}>
                    <Dropdown />
                  </div>
                </div>
                {showCard && (<div className={classes.moreCardContainer}>
                  {todoCardAction.map((item) => (
                    <>
                      <MoreCard
                        iconImg={item.sideIcon}
                        textArea={item.itemName}
                      />
                    </>
                  ))}

                </div>)}
                {showCard && (<div className={classes.moreCardContainer}>
                  {todoCardAction.map((item) => (
                    <>
                      <MoreCard
                        iconImg={item.sideIcon}
                        textArea={item.itemName}
                      />
                    </>
                  ))}

                </div>)}
                {/* {taskContent.map((item) => (
                  <>
                    <DoneCard
                      description={item.decription}
                      dueDate={item.dueDate}
                      memberName={item.mebemberName}
                      dueRaisedIcon={item.dateRaisedIcon}
                      dateRaisedText={item.dateRaisedText}
                      dueDateIcon={item.dueDateIcon}
                      dueDateText={item.dueDateText}
                    />
                  </>
                ))} */}
                <div className={classes.noTaskContainer}>
                  <Image src={noTask} alt="Empty" />
                  <h3 className={classes.noTaskText}>No Task Found!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
