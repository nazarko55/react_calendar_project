import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import './hour.scss';
import moment from 'moment';

const Hour = ({
  hour,
  currentDay,
  eventData,
  fetchEvents
}) => {
  const [minutes, setMinutes] = useState(moment().format('mm'))

  useEffect(() => {
    const intervalId = setInterval(() =>
      setMinutes(moment().format('mm')), 60000);

    return () => clearInterval(intervalId);
  });



  return (
    <div className="calendar__hour" data-date={currentDay} data-timestart={hour}>
      {eventData
        ? <Event
          eventData={eventData}
          fetchEvents={fetchEvents} />
        : null}
      {`${currentDay} ${hour}` === moment().format('YYYY-MM-DD HH')
        && <div className='calendar__hour__red-line' style={{ top: `${minutes}px` }}></div>
      }
    </div>
  )
}

Hour.propTypes = {
  hour: PropTypes.string.isRequired,
  currentDay: PropTypes.string.isRequired,
  eventData: PropTypes.object,
  fetchEvents: PropTypes.func.isRequired,
}

export default Hour