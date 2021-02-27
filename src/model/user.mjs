import decorate from "../util/decorate.mjs";

export default class User {
  constructor({ decoratorOptions }) {
    if (decoratorOptions) {
      decorate(this, decoratorOptions);
    }
  }

  setName(name) {
    return `Your name is ${name}`;
  }
}
