import { Parrot } from './parrot';

export class NorwegianBlue extends Parrot {
  constructor(voltage, isNailed) {
    super();
    this.voltage = voltage;
    this.isNailed = isNailed;
  }

  getSpeed() {
    return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
  }

  getBaseSpeedWithVoltage(voltage) {
    return Math.min(24, voltage * this.getBaseSpeed());
  }
}