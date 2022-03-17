const FormField = (props) => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <type className="type">{props.type}</type>
        <input className="input" placeholder={props.placeholder}/>
      </div>
    );
  };

  export default FormField