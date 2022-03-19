const CoolButton = (props) => {
    let buttonColor = ''
    
    if (props.isPrimary) {
        buttonColor = 'is-primary'
    } if (props.isSuccess) {
        buttonColor = 'is-success'
    } if (props.isDanger) {
        buttonColor = 'is-danger'
    }
    
    return (
        <>
            <button className={`button ${buttonColor}`}>
                {props.children}
            </button>
        </>
    )
}

export default CoolButton