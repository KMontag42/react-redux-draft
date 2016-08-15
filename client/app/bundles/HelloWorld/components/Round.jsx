import React, { PropTypes } from 'react';

export default class extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <span>{this.props.number}</span>&nbsp;
        {this.props.children}
      </div>
    );
  }
}