import "./FormField.css"

let FormField = ({label, type, placeholder}) => {
    return (
        <div className='field'>
            <label className='label'>{label}</label>
            <div className="control">
                <input className="input" type={type} placeholder={placeholder}></input>
            </div>
        </div>
    )
}

export default FormField