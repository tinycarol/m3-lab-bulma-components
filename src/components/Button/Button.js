import './Button.css';

function Button({classy, children="Button amore"}) {
    return (
        <button className={`button ${classy}`}>{children}</button>
    )
}

export default Button;