import timeHandler from './timeHandler';
import timeToMilitary from './timeToMilitary';

export default async () => {
  const response = await fetch('https://www.londonprayertimes.com/api/times/?format=json&key=2a99f189-6e3b-4015-8fb8-ff277642561d');
  const data = await response.json();

  // new times in times mility format
  const fajr = timeToMilitary('Fajr', data.fajr);
  const sunrise = timeToMilitary('Sunrise', data.sunrise);
  const dhuhr = timeToMilitary('Dhuhr', data.dhuhr);
  const asr = timeToMilitary('Asr', data.asr);
  const magrib = timeToMilitary('Magrib', data.magrib);
  const isha = timeToMilitary('Isha', data.isha);

  return [
    { time: fajr, passed: timeHandler(fajr, 'isPassed'), english: 'Fajr', arabic: 'الفجر' },
    { time: sunrise, passed: timeHandler(sunrise, 'isPassed'), english: 'Sunrise', arabic: 'الشروق' },
    { time: dhuhr, passed: timeHandler(dhuhr, 'isPassed'), english: 'Dhuhr', arabic: 'الظهر' },
    { time: asr, passed: timeHandler(asr, 'isPassed'), english: 'Asr', arabic: 'العصر' },
    { time: magrib, passed: timeHandler(magrib, 'isPassed'), english: 'Magrib', arabic: 'المغرب' },
    { time: isha, passed: timeHandler(isha, 'isPassed'), english: 'Isha', arabic: 'العشاء' }
  ];
};
