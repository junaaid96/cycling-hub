import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {image, name, time} = activity;
    return (
        <div className='activity'>
            <img src={image} alt="activity-image"/>
            <h4>{name}</h4>
            <p>Time Required: <span className='time'>{time}m</span></p>
            <button className='btn'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;