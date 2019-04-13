import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input, Table} from 'antd'
 
class UpdateConsultorio extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      cedula: '',
      titulo: '',
      descripcion: '',
      tabla: []
    };

    this.columns = [{
      title: 'Clase', 
      dataIndex: 'clase',
      width: '25%',
      editable: true
    },
    {
      title: 'Alimento', 
      dataIndex: 'nombre',
      width: '25%',
    }, 
    {
      title: 'Ración',
      width: '10%',
      dataIndex: 'racion'  
    },
    {
      title: 'Energía',
      width: '10%',
      dataIndex: 'energia'
    },
    {
      title: 'Carbs',
      width: '10%',
      dataIndex: 'carbohidratos' 
    },
    {
      title: 'Grasas',
      width: '10%',
      dataIndex: 'grasa'
    },
    {
      title: 'Proteínas',
      width: '10%',
      dataIndex: 'proteinas'
    }];
  }

  componentDidMount() {
    this.getSingle()
  }

  getSingle = () => {
    const {params} = this.props.match;
    axios.get(`http://localhost:5000/api/mis-servicios/actualiza-info/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      const datos = responseFromApi.data;
      console.log(datos)
      this.setState({
        nombre: datos.expert[0].nombre,
        cedula: datos.expert[0].cedula,
        titulo: datos.expert[0].titulo,
        descripcion: datos.expert[0].descripcion,
        tabla: datos.expert[0].tabla
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const cedula = this.state.cedula;
    const titulo = this.state.titulo;
    const descripcion = this.state.descripcion;
    // const tabla = this.state.tabla;
    const {params} = this.props.match

    axios.put(`http://localhost:5000/api/mis-servicios/actualiza-info/${params.id}`, {nombre, cedula, titulo, descripcion},{withCredentials: true})
      .then(() => {
        this.props.history.push('/mis-servicios');
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

  handleChangeTitulo = (event) => {
    this.setState({
      titulo: event.target.value
    })
  }

  handleChangeCedula = (event) => {
    this.setState({
      cedula: event.target.value
    })
  }

  handleChangeDescripcion = (event) => {
    this.setState({
      descripcion: event.target.value
    })
  }

  handleChangeNombre = (event) => {
    this.setState({
      nombre: event.target.value
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
          <h1>Tabla de equivalencias </h1>
          <Table bordered columns={this.columns} dataSource={this.state.tabla} pagination={{pageSize:50}} scroll={{y: 240}}/>
        </div>
      <div style={{display:'inline-block'}}>
      <Form {...formItemLayout} onSubmit={this.handleFormSubmit} style={{width:'50em'}}>
        <Form.Item
          label="Nombre">
          <TextArea rows={1} type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChangeNombre(e)}/>
        </Form.Item>

        <Form.Item
          label="Número de cédula">
          <TextArea rows={1} type="text" name="cedula" value={this.state.cedula} onChange={e => this.handleChangeCedula(e)}/>
        </Form.Item>

        <Form.Item
          label="Título">
          <TextArea rows={1} type="text" name="titulo" value={this.state.titulo} onChange={e => this.handleChangeTitulo(e)}/>
        </Form.Item>
       
        <Form.Item
          label="Describe tus servicios:">
          <TextArea type="text" name="descripcion" value={this.state.descripcion} onChange={e => this.handleChangeDescripcion(e)}/>
        </Form.Item>

        <Form.Item {...tailFormLatout}>
          <Button type="primary" htmlType="submit">Actualizar</Button>
          <Link to={'/mis-servicios'}>Regresar</Link>
        </Form.Item>
        
        
      </Form>
      
      </div>
      </div>
 
    )
  }
}

export default UpdateConsultorio;