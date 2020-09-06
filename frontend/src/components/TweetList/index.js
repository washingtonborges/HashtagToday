import React from 'react';
import { connect } from 'react-redux';
import Tweet from '../Tweet';

const Tweetlist = ({ tweets, dispatch }) => (
    <div className='tweet-list'>
        {
            tweets.statuses.map(tweet => (
                <div key={tweet.id}>
                    <Tweet
                        avatar={tweet.user.profile_image_url}
                        name={tweet.user.name}
                        nickname={tweet.user.screen_name}
                        time={tweet.created_at}
                        message={tweet.text}
                    />
                </div>
            ))
        }
    </div>
);

export default connect(state => ({ tweets: state.tweets }))(Tweetlist);