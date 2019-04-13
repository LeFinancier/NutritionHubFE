import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Input} from 'antd';

class Cita extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: 0,
      grasa: 0,
      musculo: 0,
      abdomen: 0,
      pecho: 0
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const peso = this.state.peso
    const grasa = this.state.grasa
    const musculo = this.state.musculo
    const abdomen = this.state.abdomen
    const pecho = this.state.pecho
    const cliente = this.props.user.loggedInUser.main[0]
    const {params} = this.props.match

    axios.post(`http://localhost:5000/api/cita/${params.id}`, {peso, grasa, musculo, abdomen, pecho, cliente}, {withCredentials:true})
      .then( () => {
        this.setState({
            peso: "",
            grasa: "",
            musculo: "",
            abdomen: "",
            pecho: ""
        });
      })
      .catch (error => console.log(error))
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render(){
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    }

    const tailFormLatout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8,
        }
      }
    }

    return(
      <div>
        <h1>Cita</h1>
        <h3>Detalla los objetivos que deseas obtener mediante el plan de nutrición</h3>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
          <Form.Item
            label="Peso general">
            <Input type="number" name="peso" value={this.state.peso} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Peso de músculo">
            <Input type="number" name="musculo" value={this.state.musculo} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Porcentaje de grasa corporal">
            <Input type="number" name="grasa" value={this.state.grasa} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Talla de abdomen">
            <Input type="number" name="abdomen" value={this.state.abdomen} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Talla de pecho">
            <Input type="number" name="pecho" value={this.state.pecho} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit">Solicitar</Button>
          </Form.Item>
        </Form>  
      </div>

    )
  }

}

export default Cita;