import React from 'react'
import Navbar from './Navbar'
import classes from "../../styles/Home.module.css"
import Plus from '../assets/svg/Plus'
import TaskCard from './TaskCard'
import TodoIcon from '../assets/svg/TodoIcon'
import Dropdown from '../assets/svg/Dropdown'
import { taskContent } from '../data'
const Dashboard = () => {
  return (
    <>
      <div className={classes.pageRoot}>
        <Navbar />
        <h3 className={classes.header}>Dashboard</h3>
        <div className={classes.createTaskContainer}>
          <div className={classes.createTaskBtn}>
            <Plus />
            <h3 className={classes.createTask}>New Task</h3>
          </div>
        </div>

      </div>
      <div className={classes.whiteCard}>
        <div className={classes.greyCard}>
          <div className={classes.todoWrapperContainer}>
            <div className={classes.todoWrapper}>
              <TodoIcon />
              <p>Todo</p>
            </div>
            <Dropdown />
          </div>
          {taskContent.map((item) => (
            <>
              < TaskCard
                description={item.decription}
                dueDate={item.dueDate}
                memberName={item.mebemberName}
              />

            </>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard
