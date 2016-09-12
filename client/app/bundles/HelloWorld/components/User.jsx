import React, { PropTypes } from 'react';

export default class extends React.Component {
  static defaultPropTypes = {
    user: PropTypes.string.isRequired,
    online: PropTypes.bool
  };

  render() {
    const { user, online } = this.props;

    const defaultStyle = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      display: 'inline-block'
    };

    const isOnline = typeof online !== 'undefined' && online;

    return (
      <span style={defaultStyle}>
        {user.get('username')}
        {isOnline && <div>online</div>}
      </span>
    )
  }
}
