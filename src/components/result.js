import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Result extends Component {
  addPoints(chosen) {
    const points = _.reduce(chosen, (result, value) => {
      return result + value;
    }, 0);
    return this.determineRapper(points);
  }

  determineRapper(points) {
    const { rapper, image, description } = _.head(_.filter(this.props.rappers, ({ floor, ceiling }) => {
      return _.inRange(points, floor, ceiling);
    }));
    return (
      <div>
        <h1>{`You are ${rapper}!`}</h1>
        <p>{description}</p>
        <img src={`/assets/images/${image}`}/>
      </div>
    );
  }

  render() {
    const { chosen } = this.props;
    const size = _.size(chosen);
    if (size === 5) {
      return (
        <div className="result-container">
          {this.addPoints(chosen)}
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return { chosen: state.chosen, rappers: state.rappers }
}

export default connect(mapStateToProps)(Result);
