import React, { PropTypes } from 'react';
import _ from 'underscore';

export default class extends React.Component {
  static propTypes = {
    pick: PropTypes.object,
    contestants: PropTypes.object
  };

  render() {
    const { pick, contestants } = this.props;

    const contestant = _.find(contestants.toArray(), (x) => x.get('name') == pick.get('contestantId'));

    const defaultStyle = {
      width: '140px',
      height: '140px',
      border: '1px solid grey',
      display: 'inline-block',
      background: 'url('+contestant.get('picture')+')',
      backgroundSize: 'contain'
    };

    const divStyle = {
      background: 'rgba(255,255,255,0.4)'
    };

    return (
      <div style={defaultStyle}>
        <div style={divStyle}>
          User: {pick.get('userId')} <br/>
          {pick.get('contestantId')}
        </div>
      </div>
    )
  }
}
