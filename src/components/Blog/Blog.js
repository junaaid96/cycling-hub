import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <hr />
            <h2>How Does React Works?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h2>Differences between props and state.</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            <h2>What is the usage of useEffect other than data loading from API?</h2>
            <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.</p>
        </div>
    );
};

export default Blog;