import React, { PropTypes } from 'react';

export default class extends React.Component {
  static defaultPropTypes = {
    user: PropTypes.string.isRequired
  };

  render() {
    return <span>{this.props.user}</span>
  }
}
