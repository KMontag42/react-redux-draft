import React, { PropTypes } from 'react';

export default class extends React.Component {
  static propTypes = {
    pick: PropTypes.object
  };

  render() {
    return (
      <span>
        User: {this.props.pick.userId} | Contestant: {this.props.pick.contestantId}
      </span>
    )
  }
}