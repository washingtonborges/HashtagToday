import React from 'react';
import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'
import './style.css';

function calculateTime(time) {
    TimeAgo.addLocale(pt)
    const timeAgo = new TimeAgo('pt')
    const objTime = new Date(time);
    return timeAgo.format(objTime);
}

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
                <span className='time'>{calculateTime(props.time)}</span>
                <div className='message'>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Tweet;