import moment from 'moment';

export const initialFormData = {
  title: '',
  date: moment().format('YYYY-MM-DD'),
  timeStart: moment().format('HH:mm'),
  timeEnd: moment().format('HH:mm'),
  description: '',
}