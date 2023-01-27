class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    // ... your code goes here
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {

      this.currentTime++;

      if (printTimeCallback) printTimeCallback()
    }, 1000)

  }

  getMinutes() {

    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // string de 2 valores
    if (value < 10) {
      return `0${value}`
    }
    else {
      return `${value}`
    }

  }

  stop() {

    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    clearInterval(this.intervalId)
    this.currentTime = 0;

  }

  split() {
    // ... your code goes here
    return `${Math.floor(this.currentTime / 60)} : ${this.currentTime % 60} `

  }
}
