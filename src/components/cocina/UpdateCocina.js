import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input, Table} from 'antd'
 
class UpdateCocina extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      direccion: '',
      condicionesEntrega: '',
    };
  }

  componentDidMount() {
    this.getSingle()
  }

  getSingle = () => {
    const {params} = this.props.match;
    axios.get(`${process.env.REACT_APP_API_URL}/mi-cocina/actualiza-info/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      const datos = responseFromApi.data;
      this.setState({
        nombre: datos.store[0].nombre,
        descripcion: datos.store[0].descripcion,
        direccion: datos.store[0].direccion,
        condicionesEntrega: datos.store[0].condicionesEntrega,
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const descripcion = this.state.descripcion;
    const direccion = this.state.direccion;
    const condicionesEntrega = this.state.condicionesEntrega;
    const {params} = this.props.match

    axios.put(`${process.env.REACT_APP_API_URL}/mi-cocina/actualiza-info/${params.id}`, {nombre, direccion, condicionesEntrega, descripcion},{withCredentials: true})
      .then(() => {
        this.props.history.push('/mi-cocina');
      })
      .catch (error => console.log(error))
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

  handleChangeNombre = (event) => {
    this.setState({
      nombre: event.target.value
    })
  }

  handleChangeDescripcion = (event) => {
    this.setState({
      descripcion: event.target.value
    })
  }

  handleChangeDireccion = (event) => {
    this.setState({
      direccion: event.target.value
    })
  }

  handleChangeCondicionesEntrega = (event) => {
    this.setState({
      condicionesEntrega: event.target.value
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
    return (
      <div>
        <h1>Datos de mi cocina</h1>
      <div style={{display:'inline-block'}}>
      <Form {...formItemLayout} onSubmit={this.handleFormSubmit} style={{width:'50em'}}>
        <Form.Item
          label="Nombre">
          <TextArea rows={1} type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChangeNombre(e)}/>
        </Form.Item>

        <Form.Item
          label="Descripción:">
          <TextArea rows={1} type="text" name="descricpion" value={this.state.descripcion} onChange={e => this.handleChangeDescripcion(e)}/>
        </Form.Item>

        <Form.Item
          label="Dirección:">
          <TextArea rows={1} type="text" name="direccion" value={this.state.direccion} onChange={e => this.handleChangeDireccion(e)}/>
        </Form.Item>
       
        <Form.Item
          label="Condiciones de entrega: ">
          <TextArea type="text" name="condicionesEntrega" value={this.state.condicionesEntrega} onChange={e => this.handleChangeCondicionesEntrega(e)}/>
        </Form.Item>

        <Form.Item {...tailFormLatout}>
          <Button type="primary" htmlType="submit">Actualizar</Button>
          <Link to={'/mi-cocina'}>Regresar</Link>
        </Form.Item>
        
        
      </Form>
      
      </div>
      </div>
 
    )
  }
}

export default UpdateCocina;