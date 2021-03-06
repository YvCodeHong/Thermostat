'use strict';

describe('Thermostat', function() {

   var thermostat;

   beforeEach(function() {
     thermostat = new Thermostat();
   });

   it('starts at 20 degrees', function() {
     expect(thermostat.temperature).toEqual(20);
   });

   it('increases in temperature with up ()', function() {
     thermostat.up();
     expect(thermostat.getCurrentTemperature()).toEqual(21);
   })

   it('decreases in temperature with down()', function(){
     thermostat.down();
     expect(thermostat.getCurrentTemperature()).toEqual(19)
   })

   it('has minimum of 10 degrees', function() {
     for (var i = 0; i < 11; i++) {
       thermostat.down();
     }
     expect(thermostat.getCurrentTemperature()).toEqual(10);
   });

   it('has power saving mode on by default', function() {
     expect(thermostat.isPowerSavingModeOn()).toBe(true);
   });

   it('can switch PSM off', function() {
     thermostat.switchPowerSavingModeOff();
     expect(thermostat.maxTemp).toEqual(32);
     expect(thermostat.isPowerSavingModeOn()).toBe(false);
   });

   it('can switch PSM back on', function() {
     thermostat.switchPowerSavingModeOff();
     expect(thermostat.isPowerSavingModeOn()).toBe(false);
     thermostat.switchPowerSavingModeOn();
     expect(thermostat.maxTemp).toEqual(25);
     expect(thermostat.isPowerSavingModeOn()).toBe(true);
   });

   it('can reset temperature to 20', function() {
     thermostat.reset();
     expect(thermostat.temperature).toEqual(20);
   });

   it('shows low energy usage', function() {
     console.log(thermostat)
     thermostat.down();
     thermostat.down();
     thermostat.down();
     console.log(thermostat)
     expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
   });

   it('shows medium energy usage', function() {
     thermostat.up(3)
     expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
   });

   it('shows when high energy usage', function() {
     thermostat.switchPowerSavingModeOff();
     thermostat.up();
     thermostat.up();
     thermostat.up();
     thermostat.up();
     thermostat.up();
     thermostat.up();
     expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
   });
});
