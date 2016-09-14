import React, { PropTypes, Component } from 'react';
import _ from 'underscore';

export default class ChooseContestant extends Component {
  static propTypes = {
    contestants: PropTypes.array.isRequired
  };

  toggleModal() {
    $(this.refs.modal).modal();
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
      <div className="m-y-1">
        <div className="row">
          <button onClick={this.toggleModal.bind(this)} className="btn btn-primary" ref='button'>Make Pick</button> {/*contestant id*/}
        </div>

        <div ref="modal" className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Choose Contestant</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  {_.map(contestants, (x) =>
                    <div key={x.get('id')} onClick={() => window.App.draft.make_pick(x.get('id'))} className="col-xs-6 col-md-3" style={{cursor: 'pointer'}}>
                      {x.get('name')}
                      <img src={x.get('picture')} alt={x.get('name')} className="img-fluid img-rounded"/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
