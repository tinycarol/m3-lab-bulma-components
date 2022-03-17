import React from 'react';
import "../../App.css"

const Card = ({img,heading,content}) => {
    return (
        <div className="card ">
            <header className="card-header">
                <p className="card-header-title"> {heading} </p>
            </header>

            <figure className="image is-4by3">
                <img src={img} alt=""/>
            </figure>

            <div className="content"> {content} </div>
        </div>
    );
}

export default Card;



