import { combineReducers } from "redux";
import userReducer from "@/store/slices/user";
import signInReducer from "@/store/slices/signIn";
import todosReducer from "@/store/slices/todoSlice";

const rootReducer = combineReducers({
  userState: userReducer,
  signInState: signInReducer,
  todosState: todosReducer,
});

export default rootReducer;
