import React, { Component } from 'react';

class QuestionOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleSelect(img) {
    console.log(img);
    this.setState({ selectedOption: img });
  }

  renderOptions() {
    const root = '/assets/images/';
    let { options } = this.props;
    return options.map(({ img, points }) => {
      return (
        <div key={points} className="col-md-4">
          <div onClick={() => this.handleSelect(img)} className={this.state.selectedOption === img ? 'thumbnail chosen' : 'thumbnail'}>
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

export default QuestionOptions;
