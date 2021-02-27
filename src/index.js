const User = require("./model/user.js");
const logExecutionTime = require("./util/log-execution-time");

const user = new User({
  decoratorOptions: {
    setName: [logExecutionTime],
  }
});

console.log(user.setName('Francisco'));
