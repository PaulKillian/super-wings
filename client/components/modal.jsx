import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: '',
      view: '',
      isHidden: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isHidden: true
    });
  }

  componentDidMount() {
    let modalContent = null;
    modalContent = 'This website is a DEMO and is not an actually store.';
    this.setState({
      isHidden: false,
      popup: modalContent,
      view: this.props.view
    });
  }

  render() {
    return (
      <div className={`modal fade ${(!this.state.isHidden ? 'show d-block' : 'd-none')}`} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="d-flex justify-content-center">
              <img className="modal-title" src="/images/Paul.jpg"></img>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{this.state.popup}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal"
                onClick={() => this.props.setView('catalog', {})}
              >Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
