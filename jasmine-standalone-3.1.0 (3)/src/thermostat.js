'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
}

Thermostat.prototype.down = function(){
  console.log('thermostat')
  if (this.isMinimumTemperature()) {
    console.log('maxTemp')
    return;
  }
  console.log('temperature')
  this.temperature -= 1;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
  this.maxTemp = 25;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
  this.maxTemp = 32;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.currentEnergyUsage = function() {
  if(this.temperature < 18) {
    return "low-usage";
  } else if(this.temperature < 25 ) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
  };
