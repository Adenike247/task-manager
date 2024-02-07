import React, { useState } from "react";
import Popup from "./Popup";
import classes from "../../styles/CreateTask.module.css";
import InputField from "./InputField";
import Button from "./Button";
const initialState = {
  fullName: "",
  dueDate: "",
  title: "",
  description: "",
};
const EditTask = ({ closeModal }) => {
  const [formValues, setFormValues] = useState(initialState);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const { fullName, dueDate, title, description } = formValues;
    if (!fullName || !dueDate || !title || !description) return;
  };
  return (
    <>
      <Popup closeModal={closeModal}>
        <div className={classes.pageRoot}>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>First Name</h3>
            <InputField
              placeholder="Enter your name here"
              onChange={handleChange}
              type="text"
              name="fullName"
              required
            />
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Due Date</h3>
            <InputField
              placeholder="Select Due Date"
              onChange={handleChange}
              type="text"
              name="dueDate"
              required
            />
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Title</h3>
            <InputField
              placeholder="Enter your title here"
              onChange={handleChange}
              type="text"
              name="title"
              required
            />
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Description</h3>
            <div className={classes.textareaFieldContainer}>
              <textarea
                placeholder="Description..."
                className={classes.textareaField}
                onChange={handleChange}
                type="text"
                name="description"
                required
              />
            </div>
          </div>
          <div className={classes.btnContainer}>
            <Button
              //   isLoading={loading}
              onClick={handleSubmit}
              //   disabled={loading}
            >
              Save
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default EditTask;
