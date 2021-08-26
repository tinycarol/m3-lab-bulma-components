import "./FormField.css"

export default ({label, type, placeholder}) => {
    return (
        <div className='field'>
            <label className='label'>{label}</label>
            <div className="control">
                <input className="input" type={type} placeholder={placeholder}></input>
            </div>
        </div>
    )
}