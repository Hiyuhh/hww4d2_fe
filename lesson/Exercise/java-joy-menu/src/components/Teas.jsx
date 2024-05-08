import React from 'react'

function Teas(props) {
    return (
        <div>
            {props.teasList.map((tea, index) => (
                <p key={index}>{tea.name}</p>
            ))}
        </div>
    );
};

export default Teas;
