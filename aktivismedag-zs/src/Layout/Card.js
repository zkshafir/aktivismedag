import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({image, text}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card" onClick={() => setFlipped(!flipped)}>
            {
                flipped ? (    
                    <div className="card__text">
                        <p>{text}</p>
                    </div>
                ) : (
                    <img src={image} />
                )
            }
        </div>
	);
};

Card.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};

export default Card;