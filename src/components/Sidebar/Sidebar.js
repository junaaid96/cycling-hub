import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className='user'>
                <img src="avatar.png" alt="avatar" />
                <div>
                    <h3>Md. Junaidul Islam</h3>
                    <p>Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className='user-info'>
                <div>
                    <p><span className='text'>70</span>kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><span className='text'>6.10</span>"</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='text'>25</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <h4>Add A Break</h4>
            <div className='common-style'>
                <div>
                    <p className='break-time'>5m</p>
                </div>
                <div>
                    <p className='break-time'>10m</p>
                </div>
                <div>
                    <p className='break-time'>15m</p>
                </div>
                <div>
                    <p className='break-time'>20m</p>
                </div>
                <div>
                    <p className='break-time'>30m</p>
                </div>
            </div>
            <h4>Activity Details</h4>
            <div className='common-style'>
                <h4>Cycling Time</h4>
                <p>0</p>
            </div>
            <div className='common-style'>
                <h4>Break Time</h4>
                <p>0</p>
            </div>
        </div>
    );
};

export default Sidebar;