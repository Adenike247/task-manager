import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import classes from "../../styles/Dashboard.module.css";
import Plus from "../assets/svg/Plus";
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
import EditTask from "./EditTask";
import MoreCard from "./MoreCard";
import Image from "next/image";
import { noTask } from "../assets/Images";
const Dashboard = () => {
  const [showCard, setShowCard] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("Todo");
  // const [emptyTodo, setShowEmpty] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);
  const handleFilter = (filter) => {
    setFilter(filter);
    setShowCard(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const closeEditModal = () => {
    setEditTask(false);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items")) || null;
    if (!data) return;
    setTasks(data);
  }, []);
  return (
    <>
      <div className={classes.dashboardContainer}>
        <div className={classes.sideBarContainer}>
          <Sidebar />
        </div>
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
              <div>
                <CreateTask
                  tasks={tasks}
                  setTasks={setTasks}
                  closeModal={closeModal}
                />
              </div>
            </>
          )}
          {editTask && (
            <EditTask
              closeModal={closeEditModal}
              updatedTask={updatedTask}
              tasks={tasks}
              setTasks={setTasks}
            />
          )}
          <div className={classes.whiteCard}>
            <div
              className={
                filter === "Todo"
                  ? `${classes.greyCard} ${classes.todoFilter}`
                  : classes.greyCard
              }
            >
              <div className={classes.todoWrapperContainer}>
                <div className={classes.todoWrapper}>
                  <TodoIcon />
                  <h3 className={classes.taskHeader}>Todo</h3>
                </div>
                <div
                  onClick={() => {
                    setShowCard(!showCard);
                  }}
                  className={classes.dropDownIcon}
                >
                  <Dropdown />
                </div>
              </div>
              {showCard && (
                <div className={classes.moreCardContainer}>
                  {todoCardAction.map((item) => (
                    <>
                      <MoreCard
                        handleClick={() => handleFilter(item.itemName)}
                        iconImg={item.sideIcon}
                        textArea={item.itemName}
                      />
                    </>
                  ))}
                </div>
              )}
              {tasks.map((item) =>
                item.status === "todo" ? (
                  <TodoCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    dueDate={item.dueDate}
                    memberName={item.fullName}
                    dateRaisedText={item.dateRaised}
                    dueDateText={item.dueDate}
                    tasks={tasks}
                    setTasks={setTasks}
                    setEditTask={setEditTask}
                    taskId={item.id}
                    task={item}
                    setUpdatedTask={setUpdatedTask}
                  />
                ) : (
                  <></>
                )
              )}
              {tasks.filter((task) => task.status === "todo").length === 0 && (
                <div className={classes.noTaskContainer}>
                  <Image src={noTask} alt="Empty" />
                  <h3 className={classes.noTaskText}>No Task Found!</h3>
                </div>
              )}
            </div>
            {/* <div className={classes.otherTask}> */}
            <div
              className={
                filter === "Pending"
                  ? `${classes.pendingCard} ${classes.pendingFilter}`
                  : classes.pendingCard
              }
            >
              <div className={classes.pendWrapperContainer}>
                <div className={classes.todoWrapper}>
                  <Progress />
                  <h3 className={classes.taskHeader}>Pending</h3>
                </div>
                <div
                  onClick={() => {
                    setShowCard(!showCard);
                  }}
                  className={classes.dropDownIcon}
                >
                  <Dropdown />
                </div>
              </div>
              {showCard && (
                <div className={classes.moreCardContainer}>
                  {todoCardAction.map((item) => (
                    <>
                      <MoreCard
                        handleClick={() => handleFilter(item.itemName)}
                        iconImg={item.sideIcon}
                        textArea={item.itemName}
                      />
                    </>
                  ))}
                </div>
              )}
              {tasks.map((item) =>
                item.status === "pending" ? (
                  <PendingCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    dueDate={item.dueDate}
                    memberName={item.fullName}
                    dateRaisedText={item.dateRaised}
                    dueDateText={item.dueDate}
                    tasks={tasks}
                    setTasks={setTasks}
                    taskId={item.id}
                  />
                ) : (
                  <></>
                )
              )}
              {tasks.filter((task) => task.status === "pending").length ===
                0 && (
                <div className={classes.noTaskContainer}>
                  <Image src={noTask} alt="Empty" />
                  <h3 className={classes.noTaskText}>No Task Found!</h3>
                </div>
              )}
            </div>
            <div
              className={
                filter === "Done"
                  ? `${classes.doneCard} ${classes.doneFilter}`
                  : classes.doneCard
              }
            >
              <div className={classes.doneWrapperContainer}>
                <div className={classes.todoWrapper}>
                  <Done />
                  <h3 className={classes.taskHeader}>Done</h3>
                </div>
                <div
                  onClick={() => {
                    setShowCard(!showCard);
                  }}
                  className={classes.dropDownIcon}
                >
                  <Dropdown />
                </div>
              </div>
              {showCard && (
                <div className={classes.moreCardContainer}>
                  {todoCardAction.map((item) => (
                    <>
                      <MoreCard
                        handleClick={() => handleFilter(item.itemName)}
                        iconImg={item.sideIcon}
                        textArea={item.itemName}
                      />
                    </>
                  ))}
                </div>
              )}

              {tasks.map((item) =>
                item.status === "done" ? (
                  <DoneCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    dueDate={item.dueDate}
                    memberName={item.fullName}
                    dateRaisedText={item.dateRaised}
                    dueDateText={item.dueDate}
                    tasks={tasks}
                    setTasks={setTasks}
                    taskId={item.id}
                  />
                ) : (
                  <></>
                )
              )}
              {tasks.filter((task) => task.status == "done").length === 0 && (
                <div className={classes.noTaskContainer}>
                  <Image src={noTask} alt="Empty" />
                  <h3 className={classes.noTaskText}>No Task Found!</h3>
                </div>
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
