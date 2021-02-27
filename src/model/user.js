const decorate = require("../util/decorate.js");

module.exports = class User {
  constructor({ decoratorOptions }) {
    if (decoratorOptions) {
      decorate(this, decoratorOptions);
    }
  }

  setName(name) {
    return `Your name is ${name}`;
  }
}
