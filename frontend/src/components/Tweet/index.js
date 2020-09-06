import React from 'react';
import './style.css';

function Tweet(props) {
    return (
        <div className='tweet'>
            <img
                src={props.avatar}
                className='avatar'
                alt='avatar'
            />
            <div className='content'>
                <span className='name-with-handle'>
                    <span className='name'>{props.name}</span>
                    <span className='handle'>{props.nickname}</span>
                </span>
                <span className='time'>{props.time}</span>
                <div className='message'>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Tweet;