import React, { Component } from 'react';
import ValueChanger from './ValueChanger';

/*
 * The ParentComponent is the "holder" of the state, and the
 * parent of two ValueChanger components. Think of it as the
 * "source of truth" as far as application state goes. It will
 * pass the state down to the child components as props.
 * It also passes down functions that alter the state, so that
 * all of the state-handling logic is kept here, instead of
 * written in the child components.
 * This has a nice side effect of decoupling the logic of the
 * ValueChanger and allows us to only use one component but have
 * them act completely differently.
 */

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
        {/* Display the state -- just to prove the parent has the same value. */}
        <div>Parent Value: {this.state.value}</div>

        {/* Add one child component for adding one to the value. */}
        <ValueChanger label="Plus" value={this.state.value} changeFunction={this.addToValue} />

        {/* Add one child component for subtracting one from the value. */}
        <ValueChanger label="Minus" value={this.state.value} changeFunction={this.subtractFromValue} />
      </div>
    );
  }

}