import React from 'react';

import './index.css';

function Cards(props) {
    console.log(props)
    return (

        <div>
            <div className="cardblock">
                <a href={props.links}> <img src={props.imgsrc} alt="Netflix Properties" className="zoom" /></a>
                <h3 style={{ textAlign: 'center' }} className="zoom">{props.sname}</h3>
            </div>
        </div>
    );
}

export default Cards;