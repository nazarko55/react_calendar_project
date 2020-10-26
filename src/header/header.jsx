import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import './header.scss';

const Header = ({
  setCurrentWeek,
  currentWeek,
  toggleVisibleModal
}) => {

  return (
    <header className="header">
      <button
        className="create-event-button"
        onClick={() => toggleVisibleModal(true)}
      >
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path fill="#34A853" d="M16 16v14h4V20z"></path>
          <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
          <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
          <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>

        Create
      </button>
      <Navigation setCurrentWeek={setCurrentWeek} currentWeek={currentWeek} />

    </header>

  )
}

Header.propTypes = {
  setCurrentWeek: PropTypes.func.isRequired,
  currentWeek: PropTypes.number.isRequired,
  toggleVisibleModal: PropTypes.func.isRequired,
}

export default Header;

