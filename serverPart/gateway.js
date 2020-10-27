
const baseUrl = 'https://5f96861c11ab98001603ac40.mockapi.io/hardcore';

const getEvents = () => fetch(baseUrl)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error("Internal Server Error. Can't display events")
  });

const createEvents = eventData => fetch(baseUrl, {
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

const updateEvents = (eventId, eventData) => fetch(`${baseUrl}/${eventId}`, {
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

const deleteEvents = eventId => fetch(`${baseUrl}/${eventId}`, {
  method: 'DELETE'
}).then(res => {
  if (!res.ok) {
    throw new Error("Internal Server Error. Failed to delete events")
  }
});

export {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents
}