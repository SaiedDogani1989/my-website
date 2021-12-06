import React from 'react';



const Card = (props) => {
    return (

        <div className="web-cart col-lg-4 col-md-4  col-sm-6">
            <p className="web-description">{props.description}</p>
            <a target="_blank" rel="noreferrer" href={props.link}><img className="img-size" src={props.img} alt={props.alt} /></a>
        </div>

    );
}

export default Card;