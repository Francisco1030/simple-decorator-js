import User from "./model/user.mjs";
import logExecutionTime from "./util/log-execution-time.mjs";

const user = new User({
  decoratorOptions: {
    setName: [logExecutionTime],
  }
});

console.log(user.setName('Francisco'));
