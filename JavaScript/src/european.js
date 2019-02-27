import { Parrot } from './parrot';

export class European extends Parrot {
  constructor() {
    super();
  }

  getSpeed() {
    return this.getBaseSpeed();
  }
}