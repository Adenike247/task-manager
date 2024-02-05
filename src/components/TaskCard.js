import React from 'react'
import More from '../assets/svg/More'
import classes from "../../styles/TaskCard.module.css"
const TaskCard = ({ description, dueDate, memberName }) => {
    return (
        <>
            <div className={classes.taskCardContainer}>
                <div className={classes.taskCard}>
                    <h3 className={classes.userName}>{memberName}</h3>
                    <More />

                </div>
                <p>
                    {description}
                </p>
                <div className={classes.dueDate}>
                    {dueDate}
                </div>
            </div>
        </>
    )
}

export default TaskCard