import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ children, restart, visibleModal }) => {

  const modalClassName = !visibleModal
    ? 'modal overlay hidden'
    : 'modal overlay';

  return (
    <div className={modalClassName}>
      <div className="modal__content">
        <div className="create-event">
          <button className="close-btn" onClick={() => restart()}>Close</button>
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  visibleModal: PropTypes.bool.isRequired,
  restart: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  children: null
}

export default Modal;