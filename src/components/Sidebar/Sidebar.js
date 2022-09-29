import React, { useState } from 'react';
import './Sidebar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ list }) => {
    const notify = () => toast("You Have Completed an Event!");
    let time = 0;
    const [breakTime, setBreakTime] = useState(0);

    const setBreakTimeToList = (bTime) => {
        setBreakTime(bTime);
    }

    for (const activity of list) {
        time = time + activity.time;
    }

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
                    <p onClick={() => setBreakTimeToList(5)} className='break-time'>5m</p>
                </div>
                <div>
                    <p onClick={() => setBreakTimeToList(10)} className='break-time'>10m</p>
                </div>
                <div>
                    <p onClick={() => setBreakTimeToList(15)} className='break-time'>15m</p>
                </div>
                <div>
                    <p onClick={() => setBreakTimeToList(20)} className='break-time'>20m</p>
                </div>
                <div>
                    <p onClick={() => setBreakTimeToList(30)} className='break-time'>30m</p>
                </div>
            </div>
            <h4>Activity Details</h4>
            <div className='common-style'>
                <h4>Cycling Time</h4>
                <p>{time}m</p>
            </div>
            <div className='common-style'>
                <h4>Break Time</h4>
                <p>{breakTime}m</p>
            </div>

            <button onClick={notify} className='completed-btn'>
                <p>Completed</p>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </button>
        </div>
    );
};

export default Sidebar;