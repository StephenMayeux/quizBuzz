import React, { Component } from 'react';

import Questions from './questions';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="site-title">
          <a href="/">quizBuzz Presents</a>
        </h1>
        <h2 className="site-title-dark">
          <a href="/">Which 90s Hip-Hop Artist Is Your Spirit Animal?</a>
        </h2>
        <Questions />
      </div>
    );
  }
}
