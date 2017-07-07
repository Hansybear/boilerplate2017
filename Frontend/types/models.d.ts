/** TodoMVC model definitions **/

declare interface TodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare interface LoginData {
  user: string;
  password: string;
  id_token: string;
  access_token: string;
}

declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = TodoItemData[];
declare type LoginStoreState = LoginData;