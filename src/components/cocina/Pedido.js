import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input, Table} from 'antd';



class Pedido extends Component{
  constructor(props){
    super(props);
    this.state = {
      Comida: '',
      Tabla: [],
      Ldesayuno: '',
      Lcomida: '',
      Lcena: '',
      Lentrega: '',
      Mdesayuno: '',
      Mcomida: '',
      Mcena: '',
      Mentrega: '',
      MCdesayuno: '',
      MCcomida: '',
      MCcena: '',
      MCentrega: '',
      Jdesayuno: '',
      Jcomida: '',
      Jcena: '',
      Jentrega: '',
      Vdesayuno: '',
      Vcomida: '',
      Vcena: '',
      Ventrega: '',
      Sdesayuno: '',
      Scomida: '',
      Scena: '',
      Sentrega: '',
      Ddesayuno: '',
      Dcomida: '',
      Dcena: '',
      Dentrega: '',
      }
    
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

  

  getAllData = () => {
    const {params} = this.props.match
    axios.get(`${process.env.REACT_APP_API_URL}/asignar-alimentos/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        Comida: responseFromApi.data,
        Tabla: responseFromApi.data.cliente.dietas[0].expert.tabla,
        Ldesayuno: responseFromApi.data.lunes.desayuno,
        Lcomida: responseFromApi.data.lunes.comida,
        Lcena: responseFromApi.data.lunes.cena,
        Lentrega: responseFromApi.data.lunes.entrega,
        Mdesayuno: responseFromApi.data.martes.desayuno,
        Mcomida: responseFromApi.data.martes.comida,
        Mcena: responseFromApi.data.martes.cena,
        Mentrega: responseFromApi.data.martes.entrega,
        MCdesayuno: responseFromApi.data.miercoles.desayuno,
        MCcomida: responseFromApi.data.miercoles.comida,
        MCcena: responseFromApi.data.miercoles.cena,
        MCentrega: responseFromApi.data.miercoles.entrega,
        Jdesayuno: responseFromApi.data.jueves.desayuno,
        Jcomida: responseFromApi.data.jueves.comida,
        Jcena: responseFromApi.data.jueves.cena,
        Jentrega: responseFromApi.data.jueves.entrega,
        Vdesayuno: responseFromApi.data.viernes.desayuno,
        Vcomida: responseFromApi.data.viernes.comida,
        Vcena: responseFromApi.data.viernes.cena,
        Ventrega: responseFromApi.data.viernes.entrega,
        Sdesayuno: responseFromApi.data.sabado.desayuno,
        Scomida: responseFromApi.data.sabado.comida,
        Scena: responseFromApi.data.sabado.cena,
        Sentrega: responseFromApi.data.sabado.entrega,
        Ddesayuno: responseFromApi.data.domingo.desayuno,
        Dcomida: responseFromApi.data.domingo.comida,
        Dcena: responseFromApi.data.domingo.cena,
        Dentrega: responseFromApi.data.domingo.entrega,
      })
    })
  }

  componentWillMount() {
    this.getAllData();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const Ldesayuno = this.state.Ldesayuno;
    const Lcomida = this.state.Lcomida;
    const Lcena = this.state.Lcena;
    const Lentrega = this.state.Lentrega;

    const Mdesayuno = this.state.Mdesayuno;
    const Mcomida = this.state.Mcomida;
    const Mcena = this.state.Mcena;
    const Mentrega = this.state.Mentrega;

    const MCdesayuno = this.state.MCdesayuno;
    const MCcomida = this.state.MCcomida;
    const MCcena = this.state.MCcena;
    const MCentrega = this.state.MCentrega;
    
    const Jdesayuno = this.state.Jdesayuno;
    const Jcomida = this.state.Jcomida;
    const Jcena = this.state.Jcena;
    const Jentrega = this.state.Jentrega;
    
    const Vdesayuno = this.state.Vdesayuno;
    const Vcomida = this.state.Vcomida;
    const Vcena = this.state.Vcena;
    const Ventrega = this.state.Ventrega;
    
    const Sdesayuno = this.state.Sdesayuno;
    const Scomida = this.state.Scomida;
    const Scena = this.state.Scena;
    const Sentrega = this.state.Sentrega;
    
    const Ddesayuno = this.state.Ddesayuno;
    const Dcomida = this.state.Dcomida;
    const Dcena = this.state.Dcena;
    const Dentrega = this.state.Dentrega;
    

    
    const {params} = this.props.match

    axios.put(`${process.env.REACT_APP_API_URL}/asignar-alimentos/${params.id}`, {Ldesayuno, Lcomida, Lcena, Lentrega, Mdesayuno, Mcomida, Mcena, Mentrega,MCdesayuno, MCcomida, MCcena, MCentrega,Jdesayuno, Jcomida, Jcena, Jentrega,Vdesayuno, Vcomida, Vcena, Ventrega,Sdesayuno, Scomida, Scena, Sentrega,Ddesayuno, Dcomida, Dcena, Dentrega,},{withCredentials: true})
      .then(() => {
        this.getAllData();
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
    console.log(this.state)
    return(
      <div>
        <div>
          <h1>Tabla de equivalencias </h1>
          <Table bordered columns={this.columns} dataSource={this.state.Tabla} pagination={{pageSize:50}} scroll={{y: 240}}/>
        </div>
        <h1>Pedido</h1>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
          <h3>Lunes</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="Ldesayuno" value={this.state.Ldesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="Lcomida" value={this.state.Lcomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="Lcena" value={this.state.Lcena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="Lentrega" value={this.state.Lentrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <h3>Martes</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="Mdesayuno" value={this.state.Mdesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="Mcomida" value={this.state.Mcomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="Mcena" value={this.state.Mcena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="Mentrega" value={this.state.Mentrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <h3>Miércoles</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="MCdesayuno" value={this.state.MCdesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="MCcomida" value={this.state.MCcomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="MCcena" value={this.state.MCcena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="MCentrega" value={this.state.MCentrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <h3>Jueves</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="Jdesayuno" value={this.state.Jdesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="Jcomida" value={this.state.Jcomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="Jcena" value={this.state.Jcena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="Jentrega" value={this.state.Jentrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <h3>Viernes</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="Vdesayuno" value={this.state.Vdesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="Vcomida" value={this.state.Vcomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="Vcena" value={this.state.Vcena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="Ventrega" value={this.state.Ventrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <h3>Sábado</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="Sdesayuno" value={this.state.Sdesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="Scomida" value={this.state.Scomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="Scena" value={this.state.Scena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="Sentrega" value={this.state.Sentrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <h3>Domingo</h3>
          <Form.Item
            label="Desayuno">
            <Input type="text" name="Ddesayuno" value={this.state.Ddesayuno} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comida">
            <Input type="text" name="Dcomida" value={this.state.Dcomida} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Cena">
            <Input type="text" name="Dcena" value={this.state.Dcena} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Entrega">
            <Input type="date" name="Dentrega" value={this.state.Dentrega} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit">Agregar</Button>
          </Form.Item>
        </Form>
        <Link to={'/mi-cocina'}>Regresar</Link> 
      </div>
    )
  }
}

export default Pedido;