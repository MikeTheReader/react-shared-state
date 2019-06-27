import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
 * ValueChanger is a child of ParentComponent and will take
 * the state value as a prop (which is read-only as far as this
 * component is concerned).
 * It will also take a function for what it should do when the button
 * is clicked. This nicely decouples this component from knowing
 * anything about what it's actually doing. All that logic lives
 * in the parent.
 */

class ValueChanger extends Component {
  render() {
    return (
      <div style={{ padding: '20px', margin: '10px', border: '1px solid gray'}}>
        <div>Value: {this.props.value}</div>
        <button onClick={this.props.changeFunction}>{this.props.label}</button>
      </div>
    );
  }
}

ValueChanger.propTypes = {
  value: PropTypes.number,  // The value (currently from the parent's state)
  changeFunction: PropTypes.func,  // The action to perform when the button is clicked
  label: PropTypes.string  // The label of the button
}

export default ValueChanger;