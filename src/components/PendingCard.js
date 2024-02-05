import React, { useState } from 'react'
import More from '../assets/svg/More'
import classes from "../../styles/TaskCard.module.css"
import MoreCard from './MoreCard'
import { pendingAction} from '../data'
const PendingCard = ({ description, dueDate, memberName }) => {
    const [showCard, setShowCard] = useState(false);

    return (
        <>
            <div className={classes.taskCardContainer}>
                <div className={classes.taskCard}>
                    <h3 className={classes.userName}>{memberName}</h3>
                    <div onClick={() => {
                        setShowCard(!showCard);
                    }}>
                        <More />

                    </div>
                </div>
                {showCard && (<div className={classes.moreCardContainer}>
                    {pendingAction.map((item) => (
                        <>
                            <MoreCard
                                textArea={item.itemName}
                                iconImg={item.sideIcon}
                            />
                        </>
                    ))}

                </div>)}
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

export default PendingCard
