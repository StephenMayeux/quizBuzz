import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import QuestionOptions from './question_options';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentWillMount() {
    const questions = _.map(this.props.questions, (question) => {
      question.options = _.shuffle(question.options);
      return question;
    });
    this.setState({ questions });
  }

  renderQuestions() {
    return this.state.questions.map(({ id, question, options }) => {
      return (
        <div key={id} className="question-card">
          <h3 className="question-title">{question}</h3>
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
