import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import loginData from './loginData';

export interface RootState {
  todos: TodoStoreState;
  loginData : LoginData;
}

export default combineReducers<RootState>({
  todos,
  loginData
});
