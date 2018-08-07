import React, { Component } from 'react'

export default class Login extends Component {
  state = {mode: true}

  onChange = (field) => (e) => this.setState({[field]: e.target.value})
  onToggleMode = () => this.setState({mode: !this.state.mode})

  onLogin = () => {
    const {username, password} = this.state
    const {socket, navigate} = this.props
    socket.emit('login', {username, password}, (res) => {
      navigate(DocumentList)
    })
  }
  onRegister = () => {
    const {username, password, password2, name} = this.state
    const {socket, navigate} = this.props

    // TODO: if(password !== password2) return this.setState({validation:'Passwords not the same'})

    socket.emit('register', {username, password, name}, (res) => {
      navigate(DocumentList)
    })
  }

  render() {
    if(this.state.mode) {
      return (
      <div className="box-container">
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.onChange('username')}
              value={this.state.username}
              id="username"
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={this.onChange('password')}
              type="password"
              name="password"
              value={this.state.password}
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.onLogin}
            >Login
          </button>
          <button
            type="button"
            className="login-btn"
            onClick={this.onToggleMode}
            >Register
          </button>
        </div>
      </div>
      </div>
    );
    } else {
      return (
      <div className="box-container">
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              onChange={this.onChange('username')}
              value={this.state.username}
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={this.onChange('password')}
              value={this.state.password}
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <div className="input-group">
            <label htmlFor="password2">Retype Password</label>
            <input
              id="password2"
              onChange={this.onChange('password2')}
              value={this.state.password}
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.onRegister}>Register
          </button>
          <button
            type="button"
            className="login-btn"
            onClick={this.onToggleMode}
            >Cancel
          </button>
        </div>
      </div>
      </div>
    );
    }
  }
}
