import './CoolButton.css';

function CoolButton({ classProps, children }) {

  return (
    <button className={classProps}>
      {children}
    </button>
  );
}

export default CoolButton;