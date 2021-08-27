import "./CoolButton.css"

let CoolButton = (props) => {
    return (
        <button className={`button ${props.isRounded ? "is-rounded" : ""} ${props.isDanger ? "is-danger" : ""} ${props.isPrimary ? "is-primary" : ""} ${props.isSuccess ? "is-success" : ""}`}>{props.children}</button>
    )
}

export default CoolButton