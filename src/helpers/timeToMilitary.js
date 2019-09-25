import moment from 'moment';

export default (name, time) => {
  if (name === 'Dhuhr') {
    const [dhuhr_hour] = time.split(':');

    // basically check if dhuhr is in afternoon or morning
    if (dhuhr_hour < 5) return moment(`${time} PM`, 'hh:mm A').format('HH:mm');
  }

  if (name === 'Asr' || name === 'Magrib' || name === 'Isha') return moment(`${time} PM`, 'hh:mm A').format('HH:mm');

  return time;
};
