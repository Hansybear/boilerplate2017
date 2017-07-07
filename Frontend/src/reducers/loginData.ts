import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';


const initialState: LoginData = {
  user: '',
  password: '',
  id_token: undefined,
  access_token: undefined
};

export default handleActions<LoginStoreState, LoginData>({
  [Actions.LOGIN]: (state, action) => {
      console.log("Action: " + action.payload.user + ", user: " + action.payload.user + "pw: " + action.payload.password);
      return state;
  },
  ['LOGIN_FULFILLED']: (state, action) => {
      console.log("login fulfilled");
      return {...state, access_token : action.payload.access_token};
  },
  ['loginAction_REJECTED']: (state, action) =>{
      console.log("login rejected");
      return state;
  },
  ['SET_USER']: (state, action) => {
      console.log("set user: " + action.payload);
      
      return {...state, user : action.payload};
  },
  ['SET_PASSWORD']: (state, action) => {
      console.log("set password: " + action.payload);
      return {...state, password : action.payload};
  },
  ['SET_TOKEN']: (state, action) =>  {
      console.log("set token" + action.payload);
      return {...state, access_token : action.payload}
  }
}, initialState);
