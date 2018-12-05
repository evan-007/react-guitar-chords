import React, { Component } from 'react';
import ReactHighlight from 'react-highlight'
import 'highlight.js/styles/github-gist.css';
import './App.css';
import Header from './Header';
import Container from './Container';
import Example from './Example';
import ExampleRaw from '!raw-loader!./Example'; // eslint-disable-line import/no-webpack-loader-syntax
import InlineExample from './InlineExample';
import InlineExampleRaw from '!raw-loader!./InlineExample'; // eslint-disable-line import/no-webpack-loader-syntax

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="chord-background">
          <Container>
            <h2 style={{textAlign: 'center'}}>React guitar chord charts with optional audio</h2>
            <ReactHighlight className="markdown">
              yarn add react-guitar-chords
            </ReactHighlight>
            <hr />
            <div className="example-container">
              <ReactHighlight className="js">
                {ExampleRaw}
              </ReactHighlight>
              <Example />
            </div>
            <div className="example-container">
              <ReactHighlight className="js">
                {InlineExampleRaw}
              </ReactHighlight>
              <InlineExample />
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
