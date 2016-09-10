import React, { PropTypes } from 'react';

export default class extends React.Component {
  static defaultPropTypes = {
    user: PropTypes.string.isRequired
  };

  render() {
    const { user } = this.props;

    const defaultStyle = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      display: 'inline-block'
    };

    return (
      <span style={defaultStyle}>
        {user.get('username')}
      </span>
    )
  }
}
