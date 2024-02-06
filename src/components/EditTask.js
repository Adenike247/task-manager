import React from 'react'
import Popup from './Popup'
import classes from "../../styles/CreateTask.module.css"
import InputField from './InputField'
import Button from './Button'
const EditTask = () => {
    return (
        <>
            <Popup closeModal={closeModal}>
                <div className={classes.pageRoot}>
                    <div className={classes.inpuFieldWrap}>
                        <h3 className={classes.inputText}>First Name</h3>
                        <InputField placeholder="Enter your name here" />
                    </div>
                    <div className={classes.inpuFieldWrap}>
                        <h3 className={classes.inputText}>Due Date</h3>
                        <InputField placeholder="Select Due Date" />
                    </div>
                    <div className={classes.inpuFieldWrap}>
                        <h3 className={classes.inputText}>Title</h3>
                        <InputField placeholder="Enter your title here" />
                    </div>
                    <div className={classes.inpuFieldWrap}>
                        <h3 className={classes.inputText}>Description</h3>
                        <div className={classes.textareaFieldContainer}>
                            <textarea placeholder='Description...' className={classes.textareaField} />
                        </div>
                    </div>
                    <div className={classes.btnContainer}>                    <Button textArea="Add Task" />
                    </div>
                </div>
            </Popup>
        </>
  )
}

export default EditTask