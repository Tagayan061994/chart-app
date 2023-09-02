import {combineReducers} from 'redux';
import userReducer from '@/store/slices/user';
import smsReducer from '@/store/slices/sms';
import signInReducer from '@/store/slices/signIn';
// import todosReducer from '@/store/slices/todoSlice';


const rootReducer = combineReducers({
  userState: userReducer,
  smsState: smsReducer,
  signInState: signInReducer,
  // todoState: todosReducer
});

export default rootReducer;
