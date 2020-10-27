import React from 'react';
import PropTypes from 'prop-types';
import { initialFormData } from '../../momentDate';
import { createEvent } from '../../serverPart/gateway';
import './eventForm.scss';

class EventForm extends React.Component {
  state = {
    formData: initialFormData
  }

  handleChangeInputInForm = event => {
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  componentDidMount() {
    const formEl = document.querySelector('.create-event__form');
    formEl.addEventListener('submit', this.handleCreateEvent);
  }
  componentDidUpdate(prevProps) {
    if (this.props.newEventData !== prevProps.newEventData) {
      this.setState({ formData: this.props.newEventData })
    }
  }
  componentWillUnmount() {
    const formEl = document.querySelector('.create-event__form');
    formEl.removeEventListener('submit', this.handleCreateEvent);
  }

  handleCreateEvent = event => {
    event.preventDefault();
    const { createEvent, reset } = this.props;

    createEvent(this.state.formData)
      .then(() => {
        createEvents();
        reset();
        this.setState({ formData, initialFormData })
      })
      .catch(error => alert(error))
  }

  render() {
    const { title, date, timeStart, timeEnd, description } = this.state.formData;

    return (
      <form className='create-event__form'>
        <input
          type="text"
          name="title"
          className="create-event__field"
          placeholder="Title"
          value={title}
          onChange={this.handleChangeInputInForm}
        />
        <div className="create-event__time-block">
          <input
            type="date"
            name="date"
            className="create-event__date-field"
            value={date}
            onChange={this.handleChangeInputInForm}
          />
          <input
            type="time"
            name="timeStart"
            className="create-event__date-field"
            step='900'
            value={timeStart}
            onChange={this.handleChangeInputInForm}
          />
          <span>-</span>
          <input
            type="time"
            name="timeEnd"
            className="create-event__date-field"
            step='900'
            value={timeEnd}
            onChange={this.handleChangeInputInForm}
          />
        </div>
        <textarea
          name="description"
          id="" placeholder="Description"
          className="create-event-form__field"
          value={description}
          onChange={this.handleChangeInputInForm}
        />
        <button className="create-event__submit-btn" type='submit'>Save</button>
      </form>
    )
  }

}

EventForm.propTypes = {
  restart: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  newEventData: PropTypes.object.isRequired,
}

export default EventForm;