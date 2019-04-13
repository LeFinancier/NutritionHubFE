import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input} from 'antd'
 
class AddCocina extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      direccion: '',
      condicionesEntrega: '',
      datosStore: true, 
      rating: 0,
      pedidos: [],
    };
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const descripcion = this.state.descripcion;
    const direccion = this.state.direccion;
    const condicionesEntrega = this.state.condicionesEntrega;
    const {params} = this.props.match;

    axios.post(`${process.env.REACT_APP_API_URL}/mi-cocina/info/${params.id}`, {nombre, direccion, condicionesEntrega, descripcion},{withCredentials: true})
      .then(() => {
        this.setState({
          nombre: '',
          direccion: '',
          condicionesEntrega: '',
          descripcion: ''
        });
      })
      .catch (error => console.log(error))
    }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  status = () => {
    const datos = this.state.datosStore
    const {params} = this.props.match
    const id = params.id

    axios.put(`${process.env.REACT_APP_API_URL}/mi-cocina/info/${params.id}`,{datos, id}, {withCredentials:true})
    .then ( () => {
      this.props.history.push('/mi-cocina');
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
    
    return (
      <div>
        <div>
          <h1>Datos de tu cocina</h1>
          <h2>Es importante que introduzcas tus datos correctamente para que puedan organizar de mejor manera la entrega de los alimentos.</h2>
        </div>
        <div style={{display:'inline-block'}}>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit} style={{width:'50em'}}>
          <Form.Item
            label="Nombre">
            <TextArea rows={1} type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Describe tus servicios:">
            <TextArea rows={1} type="text" name="descripcion" value={this.state.descripcion} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Dirección:">
            <TextArea rows={1} type="text" name="direccion" value={this.state.direccion} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Condiciones de entrega">
            <TextArea type="text" name="condicionesEntrega" value={this.state.condicionesEntrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit" onClick={this.status}>Agregar</Button>
            <Link to={'/mi-cocina'}>Regresar</Link>
          </Form.Item>
          
          
        </Form>
        
        </div>
      </div>  
    )
  }
}

export default AddCocina;