import moment from 'moment';

export default (time, format) => {
  const now = new Date();
  const currentTimeMS = now.getTime();
  const nextTimeMS = moment(time, 'hh:mm').valueOf();

  switch (format) {
    case 'remainder':
      return nextTimeMS - currentTimeMS;
    case 'isPassed':
      return currentTimeMS > nextTimeMS;
  }
};
