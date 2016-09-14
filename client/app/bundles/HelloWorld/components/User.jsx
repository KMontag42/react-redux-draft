import React, { PropTypes } from 'react';

export default class extends React.Component {
  static defaultPropTypes = {
    user: PropTypes.string.isRequired,
    online: PropTypes.bool,
    displayOnline: PropTypes.bool,
    useStyle: PropTypes.bool,
  };

  static defaultProps = {
    online: false,
    displayOnline: false,
    useStyle: true
  };

  render() {
    const { user, online, displayOnline, useStyle } = this.props;

    const defaultStyle = {
      border: '1px solid black'
    };

    return (
      <div className={useStyle ? 'col-xs-3 col-sm-2 col-lg-1' : ''} style={useStyle ? defaultStyle : {marginTop: '1em'}}>
        {user.get('username')}
        {displayOnline && ((online && <div>Online</div>) || <div>Offline</div>)}
      </div>
    )
  }
}
