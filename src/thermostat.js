class Thermostat {
  constructor() {
    this.startTemp = 20;
    this.currentTemp = this.startTemp;
  }

  up(number) {
    this.currentTemp += number;
  }

  down(number) {
    if (this.currentTemp - number >= 10) {
      this.currentTemp -= number
    } else {
      throw new Error('minimum temperature is 10 degrees')
    }
  }
};