import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import * as en from 'javascript-time-ago/locale/en';

import { UserIcon } from '../UserIcon';
import './style.scss';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

class Tweet extends Component<iTweetProps, {key: string}> {
  constructor(props: iTweetProps) {
    super(props);
    console.log(this.props.user);
  }

  formatTime(time: string) {
    if ((Number(new Date()) - 60 * 1000) < Number(new Date(time))) {
      return 'just now';
    } else {
      return timeAgo.format(new Date(time), 'twitter');
    }
  }

  render() {
    return (
      <div className="tweet">
        <div className="tweet-left-column">
          <UserIcon userId={String(this.props.user.id)} />
        </div>
        <div className="tweet-right-column">
          <div className="tweet-header">
            <Link to={'/user/' + this.props.user.handle}>
              <span className="tweet-name">{this.props.user.name}</span>
            </Link>
            <span className="tweet-username">@{this.props.user.handle}</span>
            <span className="tweet-date">{this.formatTime(this.props.tweet.dateTime)}</span>
          </div>
          <div className="tweet-body">
            <p className="tweet-text">{this.props.tweet.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Tweet
};
