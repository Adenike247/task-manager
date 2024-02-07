import React, { useState } from 'react'
import moment from 'moment'
import More from '../assets/svg/More'
import classes from "../../styles/TaskCard.module.css"
import MoreCard from './MoreCard'
import { pendingAction} from '../data'
const PendingCard = ({
  description,
  dateRaisedText,
  dueDateText,
  memberName,
  dueDateIcon,
  dueRaisedIcon,
}) => {
  const [showCard, setShowCard] = useState(false);

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
                //   handleClick={() => handleClick(item.itemName)}
                  iconImg={item.sideIcon}
                  textArea={item.itemName}
                />
              </>
            ))}
          </div>
        )}
        <p className={classes.description}>{description}</p>
        <div className={classes.dateContainer}>
          <div className={classes.dueDateWrap}>
            {dueRaisedIcon}
            <span className={classes.dateRaisedText}>Date Raised:</span>
            <h3 className={classes.dateRaisedText}>
              {moment(dateRaisedText).format("MMM Do YYYY")}
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

export default PendingCard
