

import CountdownTimer from './counter.js';

const counter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021 00:00:00'),
});

counter.start();

// let timerID = setInterval(CountdownTimer.bind(null, ), 1000);


