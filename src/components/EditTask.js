import React, { useState } from "react";
import { toast } from "react-toastify";
import Popup from "./Popup";
import classes from "../../styles/CreateTask.module.css";
import InputField from "./InputField";
import Button from "./Button";

const EditTask = ({ closeModal, updatedTask, tasks, setTasks }) => {
  const [formValues, setFormValues] = useState(updatedTask);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const { fullName, dueDate, title, description, id } = formValues;
    if (!fullName || !dueDate || !title || !description) {
      toast.error("Fill all forms");
      return;
    }
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          fullName,
          dueDate,
          title,
          description,
        };
      }
      return task;
    });
    setTasks(newTask);
    localStorage.setItem("items", JSON.stringify(newTask));
    toast.success("Save Successfully");
    setFormValues(null);
    closeModal();
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
              value={formValues.fullName}
            />
          </div>
          <div className={classes.inpuFieldWrap}>
            <h3 className={classes.inputText}>Due Date</h3>
            <InputField
              placeholder="Select Due Date"
              onChange={handleChange}
              type="date"
              name="dueDate"
              required
              value={formValues.dueDate}
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
              value={formValues.title}
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
                value={formValues.description}
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
