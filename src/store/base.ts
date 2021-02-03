import { makeAutoObservable } from "mobx";
export default class Base {
  uid: string = "";
  token: string = "";

  constructor() {
    makeAutoObservable(this);
  }
}
