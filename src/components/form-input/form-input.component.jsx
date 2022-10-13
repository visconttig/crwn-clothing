import { $Group, $FormInput, $FormInputLabel } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <$Group>
      <$FormInput {...otherProps} />
      {label ? (
        <$FormInputLabel
          className={`${otherProps.value ? "shrink" : ""} 
                 form-input-label`}
        >
          {" "}
          {label}
        </$FormInputLabel>
      ) : null}
    </$Group>
  );
};

export default FormInput;
