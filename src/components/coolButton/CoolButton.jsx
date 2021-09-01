import React from "react";
import "./CoolButton.css";

  
    const styles = (className, isDanger, isSuccess, isSmall) => {
        let buttonStyle ="";
      
        if (className) {
          buttonStyle += `${className}`;
        }
        if (!buttonStyle.includes("butto")) {
          buttonStyle += " button";
        }
        if (isDanger) {
          buttonStyle += " is-danger";
        }
        if (isSuccess) {
          buttonStyle += " is-success";
        }
        if (isSmall) {
          buttonStyle += " is-small";
        } return buttonStyle;
      };

export default class CoolButton extends React.Component {
    render () {
        const { className, isSmall, isDanger, isSuccess, children } = this.props;
        
    return(
        <div>
            <button className={styles(className, isDanger, isSmall, isSuccess)}>{children}</button>
        </div>
    )
  }
};
