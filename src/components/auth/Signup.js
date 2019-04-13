import React, {Component} from 'react';
import AuthService from './auth-service';
import {Link} from 'react-router-dom';

import {Select, Form, Input, Icon, Button} from 'antd';

const Option = Select.Option

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', tipo: 'Cliente'};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const tipo = this.state.tipo

    this.service.signup(username, password, tipo)
    .then(response => {
      this.setState({
        username:"",
        password:"",
        tipo:""
      });
      this.props.getUser(response)
    })
    .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSelect = (value) => {
    this.setState({
      tipo: value
    })
  }

  render(){
    return(
      <div style={{display:'inline-block'}}>
        <Form onSubmit={this.handleFormSubmit} className="login-form" style={{width:'300px'}}>
          <Form.Item>
            <Input  placeholder='Ingresa tu nombre de usuario' prefix={<Icon type='user'/>} type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder='Ingresa tu password' name="password" value={this.state.password} onChange={e => this.handleChange(e)}></Input.Password>
          </Form.Item>
          <Form.Item>
            <Select defaultValue='Cliente' name='tipo' onChange={this.handleSelect}>
              <Option value='Nutriologo'>Nutriólogo</Option>
              <Option value='Cocina'>Cocina</Option>
              <Option value='Todos'>Nutriólogo, Cliente y Cocina</Option>
              <Option value='Cliente'>Cliente</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" style={{width:'100%'}}>Signup</Button>
          </Form.Item>
          <p>¿Ya tienes cuenta?
            <Link to={"/"}> Login</Link>
          </p>
        </Form>
      </div>
    )
  }
}

export default Signup;