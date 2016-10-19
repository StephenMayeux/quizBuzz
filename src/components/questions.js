import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import QuestionOptions from './question_options';

class Questions extends Component {

  renderQuestions() {
    return this.props.questions.map(({ id, question, options }) => {
      return (
        <div key={id} className="question-card">
          <h4 className="question-title">{question}</h4>
          <QuestionOptions options={options} id={id} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="question-container">
        {this.renderQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(mapStateToProps)(Questions);
