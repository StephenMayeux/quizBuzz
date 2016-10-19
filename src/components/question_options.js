import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class QuestionOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  // TODO: remove this.setState({}). Install thunk. Handle in action creator
  handleSelect(img, points, id) {
    this.setState({ selectedOption: img });
    this.props.addOption(id, points);
  }

  // TODO: pull out conditional className into helper method
  renderOptions() {
    const root = '/assets/images/';
    let { options, id } = this.props;
    return options.map(({ img, points }) => {
      return (
        <div key={points} className="col-md-4">
          <div onClick={() => this.handleSelect(img, points, id)} className={this.state.selectedOption === img ? 'thumbnail chosen' : 'thumbnail'}>
            <img src={`${root}${img}`} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderOptions()}
      </div>
    );
  }
}

export default connect(null, actions)(QuestionOptions);
