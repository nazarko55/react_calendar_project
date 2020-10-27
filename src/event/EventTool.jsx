import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { deleteEvents } from '../../serverPart/gateway'


const EventTool = ({ id, fetchEvents, toggleVisibleTooltip }) => {

  useEffect(() => {
    const deleteEventHandler = () => {
      deleteEvents(id)
        .then(() => fetchEvents())
        .catch(error => alert(error))
    }

    const eventDelElement = document.querySelector('.event__delete-tooltip');
    eventDelElement.addEventListener('click', deleteEventHandler);

    return () => eventDelElement.removeEventListener('click', deleteEventHandler);
    debugger;
  });

  return (
    <div
      className="event__delete-tooltip"
      onMouseOut={() => toggleVisibleTooltip(false)}
    >Delete   <i class="fas fa-trash-alt"></i></div>
  )
}

EventTool.propTypes = {
  id: PropTypes.string,
  fetchEvents: PropTypes.func.isRequired,
  toggleVisibleTooltip: PropTypes.func.isRequired,
}

EventTool.defaultProps = {
  id: Math.random() + ''
}

export default EventTool