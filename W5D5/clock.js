const timeFormat = function timeFormat(time) {
  return ('0' + time).slice(-2);
}

class Clock {
  constructor(date) {
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();

    setInterval(this.tick.bind(this), 1);
  }

  tick() {
    this.seconds += 1;
    this.handleOverflow();

    this.printTime();
  }

  printTime() {
    const currentTime =  `${timeFormat(this.hours)}:${timeFormat(this.minutes)}:${timeFormat(this.seconds)}`
    console.log(currentTime);
  }

  handleOverflow() {
    if (this.seconds === 60) {
      this.wrapSeconds();
    }
    if (this.minutes === 60) {
      this.wrapMinutes();
    }
    if (this.hours === 24) {
      this.wrapHours();
    }
  }

  wrapSeconds() {
    this.seconds = 0;
    this.minutes += 1;
  }

  wrapMinutes() {
    this.minutes = 0;
    this.hours += 1;
  }

  wrapHours() {
    this.hours = 0;
  }
}

clock = new Clock(new Date());
