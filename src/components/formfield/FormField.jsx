import "./FormField.css";

const getValues = (label) => {
  const value = {};
  if (label === "Name") {
    value.label = "Name";
    value.type = "text";
    value.placeholder = "e.g Alex Smith";
  } else if (label === "Email") {
    value.label = "Email";
    value.type = "email";
    value.placeholder = "e.g. alexsmith@gmail.com";
  } else if (label === "Password") {
    value.label = "Password";
    value.type = "password";
    value.placeholder = "e.g. jsdhGt5.64Xs?fe!";
  }
  return value;
};

const FormField = ({ label }) => {
  return (
    <div className="field">
      <label className="label">{getValues(label).label}</label>
      <div className="control">
        <input
          className="input"
          type={getValues(label).type}
          placeholder={getValues(label).placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
