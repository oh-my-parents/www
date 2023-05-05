import name from "./name";
import child from "./child";
import parent from "./parent";
import user from "./user";
import result from "./result";

export default {
  user: {
    ...user,
    ...name,
    ...child,
    ...result,
  },
  parent,
};
