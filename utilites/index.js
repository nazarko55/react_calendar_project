import moment from 'moment';

export const getWeekStartDay = (currentWeek) => moment().day(currentWeek * 7 + 1);

export const generateWeek = currentWeek =>
  [...Array(7).keys()].map(dayIdInWeek =>
    getWeekStartDay(currentWeek).day(dayIdInWeek + 1).format("YYYY-MM-DD"));