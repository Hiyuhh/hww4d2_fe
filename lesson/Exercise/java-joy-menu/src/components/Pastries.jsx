import React from 'react'

function Pastries(props) {
    return (
        <div>
            {props.pastriesList.map((pastry, index) => (
                <p key={index}>{pastry.name}</p>
            ))}
        </div>
    );
};

export default Pastries;
