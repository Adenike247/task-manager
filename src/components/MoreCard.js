import React from 'react'
import Edit from '../assets/svg/Edit'

const MoreCard = () => {
  return (
    <>
      <div className={classes.pageRoot}>
        <div className={classes.moreIconContainer}>
          <Edit />
          Edit
        </div>
      </div>
    </>
  )
}

export default MoreCard
