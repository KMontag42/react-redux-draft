import React, { PropTypes } from 'react';

export default class extends React.Component {
  static propTypes = {
    pick: PropTypes.object
  };

  render() {
    const defaultStyle = {
      width: '140px',
      height: '210px',
      border: '1px solid grey',
      display: 'inline-block'
    };


    return (
      <span style={defaultStyle}>
        User: {this.props.pick.get('userId')} <br/>
        Contestant: {this.props.pick.get('contestantId')}
      </span>
    )
  }
}
