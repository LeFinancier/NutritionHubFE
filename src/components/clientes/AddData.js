import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Input} from 'antd';

class addData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcionObjetivo: "",
      direccion: "",
      ejercicio: "",
      alergias: ""
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre
    const descripcionObjetivo = this.state.descripcionObjetivo
    const direccion = this.state.direccion
    const ejercicio = this.state.ejercicio
    const alergias = this.state.alergias

    axios.post(`${process.env.REACT_APP_API_URL}/mis-datos`, {nombre, descripcionObjetivo, direccion, ejercicio, alergias}, {withCredentials:true})
      .then( () => {
        this.setState({
            nombre: "",
            descripcionObjetivo: "",
            direccion: "",
            ejercicio: "",
            alergias: ""
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

    const {TextArea} = Input
    
    return(
      <div>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
          {/* <label>Nombre</label>
          <input type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)}/> */}
          <Form.Item
            label="Objetivo del plan nutricional">
            <TextArea rows={4} type="text" name="descripcionObjetivo" value={this.state.descripcionObjetivo} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Domicilio">
            <TextArea rows={3} type="text" name="direccion" value={this.state.direccion} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Las actividades físicas que practico regularmente son:">
            <TextArea type="text" name="ejercicio" value={this.state.ejercicio} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Mis alergias:">
            <TextArea type="text" name="alergias" value={this.state.alergias} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit">Agregar</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default addData;

