import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Login from './login';
import Register from './register';

export default class LogReg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'login',
    }
  }

  switchMode() {
    this.state.mode=='register'
    ? this.setState({mode: 'login'})
    : this.setState({mode: 'register'})
  }

  onLogin = (username, password) => {
    this.props.loginUser(username, password);
  }

  onRegister = (username, password, next) => {
    this.props.registerUser(username, password, next)
  }

  render(){
    return(
      (this.state.mode=='register')
      ? <Register
          switchMode={this.switchMode.bind(this)}
          onRegister={this.onRegister}
        />
      : <Login
          switchMode={this.switchMode.bind(this)}
          onLogin={this.onLogin}
        />
    )
  }
}
