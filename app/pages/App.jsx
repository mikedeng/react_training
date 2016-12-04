import React from 'react';
import Progress from './components/Progress';
require('./css/App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Progress></Progress>
    );
  }
}