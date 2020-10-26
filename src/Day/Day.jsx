import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Hour from '../Hour/Hour';
import './day.scss';

const Day = ({
  currentDay,
  eventsInCurrentDay,
  fetchEvents,
  setNewEventData,
  toggleVisibleModal
}) => {

  const getEventByTime = hour => eventsInCurrentDay.find(({ timeStart }) => {
    return timeStart.split(':')[0] == hour
  });

  const createEvent = e => {
    if (!e.target.classList.contains('calendar__hour')) {
      return
    }

    const { date, timestart } = e.target.dataset

    const dataInfForNewEvent = {
      title: '',
      description: '',
      date,
      timeStart: `${timestart}:00`,
      timeEnd: `${timestart}:00`,
    }
    setNewEventData(dataInfForNewEvent)
    toggleVisibleModal(true)
  }

  return (
    <div className="calendar__day" onClick={createEvent}>
      {[...Array(24).keys()].map(hour => (
        <Hour
          key={hour.toString().padStart(2, "0")}
          hour={hour.toString().padStart(2, "0")}
          currentDay={currentDay}
          eventData={getEventByTime(hour.toString().padStart(2, "0"))}
          fetchEvents={fetchEvents}
        />
      ))}
    </div>
  )
}

Day.propTypes = {
  currentDay: PropTypes.string.isRequired,
  eventsInCurrentDay: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  setNewEventData: PropTypes.func.isRequired,
  toggleVisibleModal: PropTypes.func.isRequired,
}

export default Day