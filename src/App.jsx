import React, { useState, useEffect } from "react";
import Header from './header/header';
import { initialFormData } from '../momentDate/index';
import { getEventsList } from '../serverPart/gateway';
import WeekHeader from './weekHeader/WeekHeader';
import Week from './week/Week';
import Modal from './modal/Modal';
import EventForm from './EventForm/EventFrom';


const App = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [isVisibleModal, toggleVisibleModal] = useState(false);
  const [events, updateEvents] = useState([]);
  const [newEventData, setNewEventData] = useState(initialFormData);


  const fetchEvents = () => getEventsList()
    .then(data => updateEvents(data))
    .catch(error => alert(error));

  useEffect(() => {
    fetchEvents()
  }, []);

  const restart = () => {
    toggleVisibleModal(false);
    setNewEventData(initialFormData)
  }

  return (
    <>
      <Header
        setCurrentWeek={setCurrentWeek}
        currentWeek={currentWeek}
        toggleVisibleModal={toggleVisibleModal}
      />
      <main className="calendar">
        <WeekHeader currentWeek={currentWeek} />
        <Week
          events={events}
          currentWeek={currentWeek}
          fetchEvents={fetchEvents}
          setNewEventData={setNewEventData}
          toggleVisibleModal={toggleVisibleModal}
        />
      </main>
      <Modal
        isVisibleModal={isVisibleModal}
        restart={restart}
      >
        <EventForm
          newEventData={newEventData}
          fetchEvents={fetchEvents}
          restart={restart}
        />
      </Modal>
    </>
  )
}


export default App;