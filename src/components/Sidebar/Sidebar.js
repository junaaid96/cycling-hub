import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className='user'>
                <img src="avatar.png" alt="avatar"/>
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
                    <p><span className='text'>70</span>"</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='text'>25</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>
           
        </div>
    );
};

export default Sidebar;