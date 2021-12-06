import React from 'react';

import "./workSample.css"
import Card from './Cart';
import cards from './card';


const WorkSample = () => {
    return (
        <div className="container-fluid portfolio">
            <div className="row">
                {cards.map((c) => {
                    return <Card
                        key={c.id}
                        description={c.description}
                        img={c.img}
                        alt={c.alt}
                        link={c.link}
                        buttonLink={c.buttonLink}
                        className={c.className}
                    />
                })}
            </div>
        </div>

    );
}

export default WorkSample;


