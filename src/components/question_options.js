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

  handleSelect(img, id) {
    this.setState({ selectedOption: img });
    this.props.addOption(id);
  }

  renderOptions() {
    const root = '/assets/images/';
    let { options, id } = this.props;

    return options.map(({ img }) => {
      return (
        <div key={img} className="col-md-4">
          <div onClick={() => this.handleSelect(img, id)} className={this.state.selectedOption === img ? 'thumbnail chosen' : 'thumbnail'}>
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
