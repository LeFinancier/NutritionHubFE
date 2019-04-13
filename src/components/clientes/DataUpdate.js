import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input} from 'antd'
 
class DataUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      descripcionObjetivo: '',
      direccion: '',
      ejercicio: '',
      alergias: ''
    };
  }

  componentDidMount() {
    this.getSingle()
  }

  getSingle = () => {
    const {params} = this.props.match;
    axios.get(`http://localhost:5000/api/mis-datos/usuario/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      const datos = responseFromApi.data;
      console.log(datos)
      this.setState({
        nombre: datos.main[0].nombre,
        descripcionObjetivo: datos.main[0].descripcionObjetivo,
        direccion: datos.main[0].direccion,
        ejercicio: datos.main[0].ejercicio,
        alergias: datos.main[0].alergias
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const descripcionObjetivo = this.state.descripcionObjetivo;
    const direccion = this.state.direccion;
    const ejercicio = this.state.ejercicio;
    const alergias = this.state.alergias;
    const {params} = this.props.match

    axios.put(`http://localhost:5000/api/mis-datos/actualiza-info/${params.id}`, {nombre, descripcionObjetivo, direccion, ejercicio, alergias},{withCredentials: true})
      .then(() => {
        this.props.history.push('/mis-datos');
      })
      .catch (error => console.log(error))
    }
  


  deleteData = (id) => {
    const {params} = this.props.match;
    axios.delete(`http://localhost:5000/api/mis-datos/usuario/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      this.props.history.push('/mis-datos')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleChangeAlergias = (event) => {
    this.setState({
      alergias: event.target.value
    })
  }

  handleChangeEjercicio = (event) => {
    this.setState({
      ejercicio: event.target.value
    })
  }

  handleChangeDireccion = (event) => {
    this.setState({
      direccion: event.target.value
    })
  }

  handleChangeDescripcion = (event) => {
    this.setState({
      descripcionObjetivo: event.target.value
    })
  }

  handleChangeNombre = (event) => {
    this.setState({
      nombre: event.target.value
    })
  }


  render(){
    console.log('hola')
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
            <TextArea rows={1} type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChangeNombre(e)}/>
          </Form.Item>

          <Form.Item
            label="Objetivo del plan nutricional">
            <TextArea rows={4} type="text" name="descripcionObjetivo" value={this.state.descripcionObjetivo} onChange={e => this.handleChangeDescripcion(e)}/>
          </Form.Item>

          <Form.Item
            label="Domicilio">
            <TextArea rows={3} type="text" name="direccion" value={this.state.direccion} onChange={e => this.handleChangeDireccion(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Las actividades físicas que practico regularmente son:">
            <TextArea type="text" name="ejercicio" value={this.state.ejercicio} onChange={e => this.handleChangeEjercicio(e)}/>
          </Form.Item>

          <Form.Item
            label="Mis alergias:">
            <TextArea type="text" name="alergias" value={this.state.alergias} onChange={e => this.handleChangeAlergias(e)}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit">Actualizar</Button>
          </Form.Item>
        </Form>
        <Link to={'/mis-datos'}>Regresar</Link>
      </div>  
    )
  }
}

export default DataUpdate;