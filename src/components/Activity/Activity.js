import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {image, name, time} = activity;
    return (
        <div className='activity'>
            <img src={image} alt="activity-image"/>
            <h4>{name}</h4>
            <p>{time}</p>
            <button>Add to List</button>
        </div>
    );
};

export default Activity;