import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Opps.. something went wrong!</h2>;
    } else {
      return this.props.children;
    }
  }
}
