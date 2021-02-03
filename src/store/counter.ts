import { makeAutoObservable } from "mobx";
export default class Counter {
  counter: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter--;
  };

  asyncIncrement = () => {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  };
}
