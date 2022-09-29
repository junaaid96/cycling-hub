import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css';

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setActivities(data))
    }, [])

    return (
        <div className="main-container">
            <div className='title'>
                <h1>Cycling Hub</h1>
                <h3>Select any activity</h3>
                <div className="activities-container">
                    {activities.map((activity) => (
                        <Activity key={activity.id} activity={activity}></Activity>
                    ))}
                </div>
            </div>
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Main;