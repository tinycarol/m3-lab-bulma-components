const CoolButton = ({ text, colorButton }) => {
    console.log(colorButton)
    return (
        <div>
            <button className={`button is-rounded my-class is-${colorButton} is-small`}>{text}</button>
        </div>
    );

}


export default CoolButton