import React from 'react'

function Coffees(props) {
    return (
        <div>
            {props.coffeesList.map((coffee, index) => (
                <div key={index}>
                    <p> {coffee.name}: {coffee.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Coffees;