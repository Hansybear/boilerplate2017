import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import axios from 'axios';
import thunk from 'redux-thunk';

export const addTodo = createAction<TodoItemData>(Actions.ADD_TODO);
export const editTodo = createAction<TodoItemData>(Actions.EDIT_TODO);
export const deleteTodo = createAction<TodoItemId>(Actions.DELETE_TODO);
export const completeTodo = createAction<TodoItemId>(Actions.COMPLETE_TODO);
export const completeAll = createAction(Actions.COMPLETE_ALL);
export const clearCompleted = createAction(Actions.CLEAR_COMPLETED);
export const login = createAction(Actions.LOGIN);
export const setUser = createAction<string>('SET_USER');
export const setPassword = createAction<string>('SET_PASSWORD');
export const setToken = createAction<string>('SET_TOKEN');


export function loginAction(loginData : LoginData) {
    return dispatch => {
        return axios.post('/api/account/sign-in',{Email: loginData.user, Password: loginData.password})
        .then(response => dispatch(setToken(response.data.access_token)))
    }
}
