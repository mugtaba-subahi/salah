export default (time: string, format: string): number | boolean | null => {
  const currentTimeMS: number = new Date().getTime();
  const [hour, minute] = time.split(':');

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);

  const nextTimeMS: number = now.valueOf();

  switch (format) {
    case 'remainder':
      return nextTimeMS - currentTimeMS;
    case 'isPassed':
      return currentTimeMS > nextTimeMS;
    default:
      return null;
  }
};
