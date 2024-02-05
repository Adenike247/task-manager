import React from 'react'
import Navbar from './Navbar'
import classes from "../../styles/Home.module.css"
import Plus from '../assets/svg/Plus'
import TaskCard from './TaskCard'
import TodoIcon from '../assets/svg/TodoIcon'
import Dropdown from '../assets/svg/Dropdown'
import { taskContent } from '../data'
import Sidebar from './Sidebar'
import Done from '../assets/svg/Done'
import Progress from '../assets/svg/Progress'
const Dashboard = () => {
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
                <div className={classes.dropDownIcon}>
                  <Dropdown />
                </div>
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
            <div className={classes.otherTask}>
              <div className={classes.pendingCard}>
                <div className={classes.todoWrapperContainer}>
                  <div className={classes.todoWrapper}>
                    <Progress/>
                    <p>Pending</p>
                  </div>
                  <div className={classes.dropDownIcon}>
                    <Dropdown />
                  </div>                </div>
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
              <div className={classes.doneCard}>
                <div className={classes.todoWrapperContainer}>
                  <div className={classes.todoWrapper}>
                    <Done/>
                    <p>Done</p>
                  </div>
                  <div className={classes.dropDownIcon}>
                    <Dropdown />
                  </div>                </div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
