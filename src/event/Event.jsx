import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventTool from '../event/EventTool';
import './event.scss';


const Event = ({
  fetchEvents,
  eventData
}) => {
  const [visibleTooltip, toggleVisibleTooltip] = useState(false);

  const { id, title, description, timeStart, timeEnd } = eventData;

  return (
    <div className="event" >
      <button
        className='event__close-btn close-btn'
        onClick={() => toggleVisibleTooltip(!visibleTooltip)}
      >+</button>
      <div className="event__title">{title}</div>
      <div className="event__time">{`${timeStart} - ${timeEnd}`}</div>
      <div className='event__description'>{description}</div>
      {visibleTooltip &&
        <EventTool
          id={id}
          fetchEvents={fetchEvents}
          toggleVisibleTooltip={toggleVisibleTooltip}
        />}
    </div>
  )
}

Event.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  eventData: PropTypes.object.isRequired,
}


export default Event