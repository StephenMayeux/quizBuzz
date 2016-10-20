import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Result extends Component {

  randomlySelectRapper() {
    const { rapper, image, description } = _.sample(this.props.rappers);
    return (
      <div className="selected-rapper">
        <h1>{`You are ${rapper}!`}</h1>
        <p>{description}</p>
        <img className="img-rounded" src={`/assets/images/${image}`}/>
      </div>
    );
  }

  render() {
    const { chosenOptions } = this.props;
    const numChosen = _.size(chosenOptions);
    if (numChosen === 5) {
      return (
        <div className="result-container" ref="results">
          <div className="result-container-item">
            {this.randomlySelectRapper()}
            <form>
              <div className="form-group">
                <label>Your email</label>
                <input className="form-control" placeholder="test@example.com" autoFocus />
              </div>
              <button className="btn btn-primary">Email My Results</button>
            </form>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return { chosenOptions: state.chosenOptions, rappers: state.rappers }
}

export default connect(mapStateToProps)(Result);
