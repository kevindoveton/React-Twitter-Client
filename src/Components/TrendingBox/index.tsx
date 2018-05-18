import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class TrendingBox extends Component<{trends: Array<iTrend>}> {
  state: {
    trends: Array<iTrend>
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      trends: this.props.trends
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="trending-box box">
        <div className="trending-box--header">
          <h2>Trending now</h2>
          <span>Change</span>
        </div>
        <div className="trending-box--content">
          {this.state && this.state.trends && this.state.trends.map((trend, index, arr) => {
            return (<div className="trend" key={index}>
              <h5>{trend.hashtag ? '#' : ''}{trend.heading}</h5>
              {trend.subHeading && <h6>{trend.subHeading}</h6>}
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export {
  TrendingBox
};
