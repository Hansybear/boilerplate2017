import * as React from 'react';
import * as style from './style.css';
import { TodoTextInput } from '../TodoTextInput';
import * as TodoActions from '../../actions/todos';


export namespace LoginStatus {
  export interface Props {
    loginData : LoginData;
    actions: typeof TodoActions;
  }

  export interface State {
    editing: boolean;
    username: string;
    password: string;
  }
}
export class LoginStatus extends React.Component<LoginStatus.Props, LoginStatus.State> {
    
constructor(props?: LoginStatus.Props, context?: any) {
    super(props, context);
    this.state = {
      editing: false,
      username : this.props.loginData.user || "",
      password: this.props.loginData.password || ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
}

handleUserChange(e) {
    this.setState({ username: e.target.value });
    this.props.actions.setUser(e.target.value);
  }
handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    this.props.actions.setPassword(e.target.value);
}

handleLogin(e) {
    this.props.actions.loginAction(this.props.loginData);
}

render() {
    const { loginData } = this.props;
    return (
    
      <div className={style.loginBox}>
      <h2>Welcome</h2>
        <input className={style.newLogin} 
        type="text"
        autoFocus
        placeholder="UserName"
        onChange={this.handleUserChange}
        />
        <input className={style.newLogin}
        type="password"
        autoFocus
        placeholder="Password"
        onChange={this.handlePasswordChange}
         />
        <button className={style.submit} onClick={this.handleLogin} title="Login">Login</button>
      </div>
    );
  }
}