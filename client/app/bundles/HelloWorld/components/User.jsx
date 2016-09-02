import React, { PropTypes } from 'react';

export default class extends React.Component {
  static defaultPropTypes = {
    user: PropTypes.string.isRequired
  };

  render() {
    const defaultStyle = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      display: 'inline-block'
    };

    return (
      <span style={defaultStyle}>
        {this.props.user}
      </span>
    )
  }
}
