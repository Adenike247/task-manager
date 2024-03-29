import React from "react";
import classes from "../../styles/InputField.module.css";
const InputField = ({
  className,
  onChange,
  value,
  placeholder,
  endIcon,
  type,
  password,
  name,
  startIcon,
  required,
  maxLength,
  defaulValue,
  pattern,
  ...props
}) => {
  return (
    <>
      <div className={classes.inputWrapper}>
        <input
          type={type}
          className={`${classes.inputField} ${className}`}
          value={value}
          name={name}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          {...props}
          maxLength={maxLength}
          pattern={pattern}
          style={{
            paddingLeft: startIcon ? "27px" : "5px",
            paddingRight: endIcon || type === "password" ? "27px" : "5px",
          }}
        />
      </div>
    </>
  );
};

export default InputField;
