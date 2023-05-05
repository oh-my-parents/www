import name from "./name";
import child from "./child";
import user from "./user";
import result from "./result";

// parents
import parent from "./parent";

export default {
  user: {
    ...user,
    ...name,
    ...child,
    ...result,
  },
  parent,
};
