import { Parrot } from './parrot';

export class African extends Parrot {
  constructor(numberOfCoconuts) {
    super();
    this.numberOfCoconuts = numberOfCoconuts;
  }

  getSpeed() {
    return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
  }

  getLoadFactor() {
    return 9;
  }
}