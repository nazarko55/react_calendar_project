
const baseUrl = 'https://5f96861c11ab98001603ac40.mockapi.io/hardcore';

const getEventsList = () => fetch(baseUrl)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error("Internal Server Error. Can't display events")
  });

const createEvent = eventData => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(eventData)
}).then(res => {
  if (!res.ok) {
    throw new Error("Internal Server Error. Failed to create events")
  }
});

const updateEvent = (eventId, eventData) => fetch(`${baseUrl}/${eventId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(eventData)
}).then(res => {
  if (!res.ok) {
    throw new Error("Internal Server Error. Failed to update events")
  }
});

const deleteEvent = eventId => fetch(`${baseUrl}/${eventId}`, {
  method: 'DELETE'
}).then(res => {
  if (!res.ok) {
    throw new Error("Internal Server Error. Failed to delete events")
  }
});

export {
  getEventsList,
  createEvent,
  updateEvent,
  deleteEvent
}