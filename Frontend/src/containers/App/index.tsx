import * as React from 'react';
import * as TodoActions from '../../actions/todos';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, MainSection } from '../../components';
import {LoginStatus} from '../../components/LoginStatus';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoItemData[];
    loginData : LoginData;
    actions: typeof TodoActions;
  }

  export interface State {
    /* empty */
  }
}



@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

renderLoginForm() {
  const {loginData, actions} = this.props;
  if(loginData.access_token) {
    return (
      <div>Logged in</div>
    )
  }else{
    return (
      <LoginStatus loginData={loginData} actions={actions} />
    );
  }
}
  render() {
    const { todos, actions, children, loginData } = this.props;
    return (
      <div>
      {this.renderLoginForm()}
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos,
    loginData: state.loginData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}
