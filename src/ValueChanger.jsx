import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  value: PropTypes.number,
  changeFunction: PropTypes.func,
  label: PropTypes.string
}

export default ValueChanger;