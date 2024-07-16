import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

// This is just for debugging , suppose if there are 10 components that i am using in my App then it become difficult to findout what context is where. That is why we give it a name to debugg it.
UserContext.displayName = "UserContext";

export default UserContext;
