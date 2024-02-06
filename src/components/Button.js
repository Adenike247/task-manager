// import { MDBSpinner } from "mdb-react-ui-kit";
import classes from "../../styles/Button.module.css"
const Button = ({
  textArea,
  className,
  type = "button",
  onClick,
  isLoading,
  ...res
}) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={isLoading}
        className={`${classes.button} ${className}`}
        {...res}
      >
        {/* {isLoading ? (
          <MDBSpinner color='success' role='status'>
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        ) : (
          children
        )} */}
        {textArea}
      </button>
    </>
  );
};

export default Button
