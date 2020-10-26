import React from 'react';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="calendar__sidebar sidebar">
      {[...Array(24).keys()].map(time => (
        <div className="sidebar__time-slot" key={time}>
          <span className="sidebar__time">{`${time}:00`}</span>
        </div>
      ))}
    </div>
  )
}

export default Sidebar