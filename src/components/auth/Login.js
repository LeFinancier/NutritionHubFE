import React, {Component} from 'react';
import AuthService from './auth-service';
import {Link} from 'react-router-dom';

import {Form, Input, Icon, Button} from 'antd';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {username: '', password: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
    .then(response => {
      this.setState({username: "", password: ""});
      this.props.getUser(response)
    })
    .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div style={{display:'inline-block'}}>
        <Form onSubmit={this.handleFormSubmit} style={{width:'300px'}}>
          <Form.Item>
            <Input placeholder='Usuario' prefix={<Icon type='user'/>} type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}/>  
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder='Ingresa tu password' name="password" value={this.state.password} onChange={e => this.handleChange(e)}></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" style={{width:'100%'}}>Login</Button>
          </Form.Item>
          <p>¿No tienes una cuenta?
            <Link to={"/signup"}> Signup</Link>
          </p>
        </Form>
      </div>
    )
  }
}

export default Login;