import React, { Component } from 'react';
import ValueChanger from './ValueChanger';

export default class ParentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  addToValue = () => {
    this.setState((state) => ({
      value: state.value + 1
    }));
  }

  subtractFromValue = () => {
    this.setState((state) => ({
      value: state.value - 1
    }));
  }

  render() {
    return (
      <div>
        <div>Parent Value: {this.state.value}</div>
        <ValueChanger label="Plus" value={this.state.value} changeFunction={this.addToValue} />
        <ValueChanger label="Minus" value={this.state.value} changeFunction={this.subtractFromValue} />
      </div>
    );
  }

}