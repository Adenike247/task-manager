import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
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
const CreateTask = ({ closeModal, tasks, setTasks }) => {
  const [formValues, setFormValues] = useState(initialState);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const { fullName, dueDate, title, description } = formValues;
    if (!fullName || !dueDate || !title || !description) {
      toast.error("Fill all forms");
      return;
    }
    const newEntry = {
      id: uuidv4(),
      fullName,
      dueDate,
      title,
      description,
      status: "todo",
      dateRaised: `${new Date()}`,
    };
    const newTask = [...tasks, newEntry];
    setTasks(newTask);
    localStorage.setItem("items", JSON.stringify(newTask));
    toast.success("Create Successfully");
    setFormValues(initialState);
    closeModal();
    return;
  };
  console.log(formValues, "hello");
  return (
    <>
      <Popup closeModal={closeModal}>
        <div className={classes.pageRoot}>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Full Name</h3>
            <InputField
              placeholder="Enter your name here"
              onChange={handleChange}
              type="text"
              name="fullName"
              required
              defaulValue={formValues.fullName}
            />
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Due Date</h3>
            <div className={classes.inputContainer}>
              <InputField
                placeholder="Select Due Date"
                onChange={handleChange}
                type="date"
                name="dueDate"
                defaulValue={formValues.dueDate}
                required
              />
           </div>
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Title</h3>
            <InputField
              placeholder="Enter your title here"
              onChange={handleChange}
              type="text"
              name="title"
              defaulValue={formValues.title}
              required
            />
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Description</h3>
            <div className={classes.textareaFieldContainer}>
              <textarea
                placeholder="Write a task..."
                className={classes.textareaField}
                onChange={handleChange}
                type="text"
                name="description"
                defaulValue={formValues.description}
                required
              />
            </div>
          </div>
          <div className={classes.btnContainer}>
            <Button onClick={handleSubmit}>Add Task</Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default CreateTask;
