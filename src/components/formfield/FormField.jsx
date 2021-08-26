import "./FormField.css";

const FormField = ({ label }) => {
  const value = {};
  if (label === "Name") {
    value.label = "Name";
    value.type = "text";
    value.placeholder = "e.g Alex Smith";
  } else if (label === "Email") {
    value.label = "Email";
    value.type = "email";
    value.placeholder = "e.g. alexsmith@gmail.com";
  }
  return (
    <div className="field">
      <label className="label">{value.label}</label>
      <div className="control">
        <input
          className="input"
          type={value.type}
          placeholder={value.placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
