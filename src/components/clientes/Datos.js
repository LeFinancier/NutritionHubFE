import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input} from 'antd'
 
class Data extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      descripcionObjetivo: '',
      direccion: '',
      ejercicio: '',
      alergias: '',
      inicio: false
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const descripcionObjetivo = this.state.descripcionObjetivo;
    const direccion = this.state.direccion;
    const ejercicio = this.state.ejercicio;
    const alergias = this.state.alergias;
    const {params} = this.props.match

    axios.post(`${process.env.REACT_APP_API_URL}/mis-datos/info/${params.id}`, {nombre, descripcionObjetivo, direccion, ejercicio, alergias},{withCredentials: true})
      .then(() => {
        this.setState({
          nombre: '',
          descripcionObjetivo: '',
          direccion: '',
          ejercicio: '',
          alergias: ''
        });
      })
      .catch (error => console.log(error))
    }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  status = () => {
    const inicio = this.state.inicio
    const {params} = this.props.match
    const id = params.id

    axios.put(`${process.env.REACT_APP_API_URL}/mis-datos/info/${params.id}`,{inicio, id}, {withCredentials:true})
    .then ( () => {
      this.props.history.push('/mis-datos');
    })
    .catch( error => console.log(error))
  }

  deleteData = (id) => {
    const {params} = this.props.match;
    axios.delete(`${process.env.REACT_APP_API_URL}/mis-datos/usuario/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      this.props.history.push('/mis-datos')
    })
    .catch((err) => {
      console.log(err)
    })
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
    console.log(this.props)
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
          <Form.Item
            label="Nombre">
            <TextArea rows={1} type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)}/>
          </Form.Item>

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
            <Button type="primary" htmlType="submit" onClick={this.status}>Agregar</Button>
          </Form.Item>
        </Form>
        <Link to={'/mis-datos'}>Regresar</Link>
      </div>  
    )
  }
}

export default Data;