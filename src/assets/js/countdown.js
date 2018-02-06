/**
 * @see https://codepen.io/SitePoint/pen/MwNPVq
 */

export default class Countdown {

  constructor(id, endtime) {
    this.initializeClock(id, endtime);
  }

  getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  updateClock() {
    let t = this.getTimeRemaining(this.endtime);

    this.daysSpan.innerHTML = t.days;
    this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(this.timeinterval);
    }
  }

  initializeClock(id, endtime) {
    let clock = document.getElementById(id);

    if (!clock) {
      return;
    }

    this.daysSpan = clock.querySelector('.countdown-days');
    this.hoursSpan = clock.querySelector('.countdown-hours');
    this.minutesSpan = clock.querySelector('.countdown-minutes');
    this.secondsSpan = clock.querySelector('.countdown-seconds');

    this.endtime = endtime;
    this.updateClock();
    this.timeinterval = setInterval(this.updateClock.bind(this), 1000);
  }
}