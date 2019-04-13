import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input, Table} from 'antd'
 
class Data extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      cedula: '',
      titulo: '',
      descripcion: '',
      datosExpert: true, 
      rating: 0,
      tabla: [],
      dietas: [],
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

    this.data = [];
    this.addKey()
  }

  
  getTabla = () => {
    const {params} = this.props.match;
    axios.get(`${process.env.REACT_APP_API_URL}/mis-servicios/info/${params.id}`, {withCredentials: true})
    .then(responseFromApi => {
      this.setState({
        tabla: responseFromApi.data.tabla
      })
    })
  }

  componentDidMount(){
    this.getTabla()
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nombre = this.state.nombre;
    const cedula = this.state.cedula;
    const titulo = this.state.titulo;
    const descripcion = this.state.descripcion;
    const tabla = this.data
    const {params} = this.props.match;

    axios.post(`${process.env.REACT_APP_API_URL}/mis-servicios/info/${params.id}`, {nombre, cedula, titulo, descripcion, tabla},{withCredentials: true})
      .then(() => {
        this.setState({
          nombre: '',
          cedula: '',
          titulo: '',
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
    const datos = this.state.datosExpert
    const {params} = this.props.match
    const id = params.id

    axios.put(`${process.env.REACT_APP_API_URL}/mis-servicios/info/${params.id}`,{datos, id}, {withCredentials:true})
    .then ( () => {
      this.props.history.push('/mis-servicios');
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

  addKey = () => {
    this.state.tabla.map((item, index) => {
      return(
        this.data.push({
          key: index, 
          clase: item.clase, 
          nombre: item.nombre, 
          racion: item.racion,
          energia: item.energia,
          proteinas: item.proteinas,
          grasa: item.grasa,
          carbohidratos: item.carbohidratos
        })
      )
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
    
    if(this.data.length === 0){
      this.addKey()}

    return (
      <div>
        <div>
          <h1>Tabla de equivalencias </h1>
          <Table bordered columns={this.columns} dataSource={this.data} pagination={{pageSize:50}} scroll={{y: 240}}/>
        </div>
        <div style={{display:'inline-block'}}>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit} style={{width:'50em'}}>
          <Form.Item
            label="Nombre">
            <TextArea rows={1} type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Número de cédula">
            <TextArea rows={1} type="text" name="cedula" value={this.state.cedula} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Título">
            <TextArea rows={1} type="text" name="titulo" value={this.state.titulo} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Describe tus servicios:">
            <TextArea type="text" name="descripcion" value={this.state.descripcion} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit" onClick={this.status}>Agregar</Button>
            <Link to={'/mis-servicios'}>Regresar</Link>
          </Form.Item>
          
          
        </Form>
        
        </div>
      </div>  
    )
  }
}

export default Data;