const FormField = ({label, type, placeholder}) => {
  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormField;