import React, { PropTypes } from 'react';

export default class extends React.Component {
  static propTypes = {
    number: PropTypes.string.isRequired
  };

  render() {
    const style = {
      width: '' + ((this.props.children.length * 150) + 25) + 'px',
      height: '140px'
    };

    return (
      <div style={style}>
        <span>{this.props.number}</span>&nbsp;
        {this.props.children}
      </div>
    );
  }
}