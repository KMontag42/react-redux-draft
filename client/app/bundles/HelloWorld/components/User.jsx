import React, { PropTypes } from 'react';

export default class extends React.Component {
  static defaultPropTypes = {
    user: PropTypes.string.isRequired,
    online: PropTypes.bool,
    displayOnline: PropTypes.bool,
  };

  static defaultProps = {
    online: false,
    displayOnline: false
  };

  render() {
    const { user, online, displayOnline } = this.props;

    const defaultStyle = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      display: 'inline-block'
    };

    return (
      <span style={defaultStyle}>
        {user.get('username')}
        {displayOnline && ((online && <div>Online</div>) || <div>Offline</div>)}
      </span>
    )
  }
}
