import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <button type={props.type} className='btn'>
            <Link className='link' to='/reserve'>{props.children}</Link>
        </button>
    )
}

export default Button
