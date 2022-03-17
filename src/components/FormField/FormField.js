import './FormField.css';

function FormField(props) {
    const {label, type, placeholder} = props;

    return (
        <>
            <form className="field container is-fluid">
                <label className="label">{label}</label>
                <div className="control">
                    <input className="input" type={`${type}`} placeholder={`${placeholder}`} />
                </div>
            </form>
        </>
    );
};

export default FormField;