describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('should start at 20 degrees', () => {
    expect(thermostat.startTemp).toEqual(20);
  });

  it('can increase temperature', () => {
    thermostat.up(5);
    expect(thermostat.currentTemp).toEqual(25);
  });

  it('can decrease temperature', () => {
    thermostat.down(5);
    expect(thermostat.currentTemp).toEqual(15);
  });

  it('cannot decrease temp below 10 degrees', () => {
    expect(function() {thermostat.down(15);}).toThrowError('minimum temperature is 10 degrees');
  });
});