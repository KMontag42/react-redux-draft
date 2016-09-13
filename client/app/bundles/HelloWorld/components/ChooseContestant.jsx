import React, { PropTypes, Component } from 'react';
import _ from 'underscore';

export default class ChooseContestant extends Component {
  static propTypes = {
    contestants: PropTypes.array.isRequired
  };

  toggleModal() {
    $(this.refs.modal).toggleClass('invisible');
    $(this.refs.button).toggleClass('invisible');
  }

  render() {
    const { contestants } = this.props;

    const modalStyle = {
      position: 'absolute',
      zIndex: 1000,
      left: '40%',
      top: '35%',
      background: 'black',
      color: 'white',
      padding: '1em'
    };

    return (
      <div>
        <button onClick={this.toggleModal.bind(this)} className="btn btn-primary" ref='button'>Make Pick</button> {/*contestant id*/}

        <div ref="modal" className="invisible row" style={modalStyle}>
          {_.map(contestants, (x) =>
            <div key={x.get('id')} onClick={() => window.App.draft.make_pick(x.get('id'))} className="col-xs-3" style={{cursor: 'pointer'}}>
              {x.get('name')}
              <img src={x.get('picture')} alt={x.get('name')} className="img-fluid img-rounded"/>
            </div>
          )}
        </div>
      </div>
    )
  }
}
