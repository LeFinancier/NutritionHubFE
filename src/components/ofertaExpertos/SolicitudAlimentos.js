import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Input, Checkbox} from 'antd';

const CheckboxGroup = Checkbox.Group;

class SolicitudAlimientos extends Component{
  constructor(props){
    super(props);
    this.state = {
      Ldesayuno: '',
      Lcomida: '',
      Lcena: '',
      Lvalidacion: false,
      Mdesayuno: '',
      Mcomida: '',
      Mcena: '',
      Mvalidacion: false,
      MCdesayuno: '',
      MCcomida: '',
      MCcena: '',
      MCvalidacion: false,
      Jdesayuno: '',
      Jcomida: '',
      Jcena: '',
      Jvalidacion: false,
      Vdesayuno: '',
      Vcomida: '',
      Vcena: '',
      Vvalidacion: false,
      Sdesayuno: '',
      Scomida: '',
      Scena: '',
      Svalidacion: false,
      Ddesayuno: '',
      Dcomida: '',
      Dcena: '',
      Dvalidacion: false,
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const Ldesayuno = this.state.Ldesayuno
    const Lcomida = this.state.Lcomida
    const Lcena = this.state.Lcena
    const Lvalidacion = this.state.Lvalidacion

    const Mdesayuno = this.state.Mdesayuno
    const Mcomida = this.state.Mcomida
    const Mcena = this.state.Mcena
    const Mvalidacion = this.state.Mvalidacion

    const MCdesayuno = this.state.MCdesayuno
    const MCcomida = this.state.MCcomida
    const MCcena = this.state.MCcena
    const MCvalidacion = this.state.MCvalidacion

    const Jdesayuno = this.state.Jdesayuno
    const Jcomida = this.state.Jcomida
    const Jcena = this.state.Jcena
    const Jvalidacion = this.state.Jvalidacion

    const Vdesayuno = this.state.Vdesayuno
    const Vcomida = this.state.Vcomida
    const Vcena = this.state.Vcena
    const Vvalidacion = this.state.Vvalidacion

    const Sdesayuno = this.state.Sdesayuno
    const Scomida = this.state.Scomida
    const Scena = this.state.Scena
    const Svalidacion = this.state.Svalidacion

    const Ddesayuno = this.state.Ddesayuno
    const Dcomida = this.state.Dcomida
    const Dcena = this.state.Dcena
    const Dvalidacion = this.state.Dvalidacion
   
    const cliente = this.props.user.loggedInUser.main[0]
    const {params} = this.props.match

    axios.post(`${process.env.REACT_APP_API_URL}/solicitud/${params.id}`, {cliente, Ldesayuno, Lcomida, Lcena, Lvalidacion, Mdesayuno, Mcomida, Mcena, Mvalidacion, MCdesayuno, MCcomida, MCcena, MCvalidacion, Jdesayuno, Jcomida, Jcena, Jvalidacion, Vdesayuno, Vcomida, Vcena, Vvalidacion, Sdesayuno, Scomida, Scena, Svalidacion, Ddesayuno, Dcomida, Dcena, Dvalidacion}, {withCredentials:true})
      .then( () => {
        this.setState({
          Ldesayuno: '',
          Lcomida: '',
          Lcena: '',
          Lvalidacion: false,
          Mdesayuno: '',
          Mcomida: '',
          Mcena: '',
          Mvalidacion: false,
          MCdesayuno: '',
          MCcomida: '',
          MCcena: '',
          MCvalidacion: false,
          Jdesayuno: '',
          Jcomida: '',
          Jcena: '',
          Jvalidacion: false,
          Vdesayuno: '',
          Vcomida: '',
          Vcena: '',
          Vvalidacion: false,
          Sdesayuno: '',
          Scomida: '',
          Scena: '',
          Svalidacion: false,
          Ddesayuno: '',
          Dcomida: '',
          Dcena: '',
          Dvalidacion: false,
        });
      })
      .catch (error => console.log(error))
  }

  handleChangeLunes = (checkedValues) => {
    this.setState({
      Ldesayuno: '',
      Lcomida: '',
      Lcena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  handleChangeMartes = (checkedValues) => {
    this.setState({
      Mdesayuno: '',
      Mcomida: '',
      Mcena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  handleChangeMiercoles = (checkedValues) => {
    this.setState({
      MCdesayuno: '',
      MCcomida: '',
      MCcena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  handleChangeJueves = (checkedValues) => {
    this.setState({
      Jdesayuno: '',
      Jcomida: '',
      Jcena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  handleChangeViernes = (checkedValues) => {
    this.setState({
      Vdesayuno: '',
      Vcomida: '',
      Vcena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  handleChangeSabado = (checkedValues) => {
    this.setState({
      Sdesayuno: '',
      Scomida: '',
      Scena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  handleChangeDomingo = (checkedValues) => {
    this.setState({
      Ddesayuno: '',
      Dcomida: '',
      Dcena: ''
    })
    checkedValues.forEach(val => {
      this.setState({
        [val]: 'Si'
      })
    })
  }

  options = (dia) => {
    if (dia === 'Lunes'){
      return ([
        {label: 'desayuno', value: 'Ldesayuno'},
        {label: 'comida', value: 'Lcomida'},
        {label: 'cena', value: 'Lcena'}
      ])
    } else if (dia === 'Martes') {
      return ([
        {label: 'desayuno', value: 'Mdesayuno'},
        {label: 'comida', value: 'Mcomida'},
        {label: 'cena', value: 'Mcena'}
      ])
    } else if (dia === 'Miercoles') {
      return ([
        {label: 'desayuno', value: 'MCdesayuno'},
        {label: 'comida', value: 'MCcomida'},
        {label: 'cena', value: 'MCcena'}
      ])
    } else if (dia === 'Jueves') {
      return ([
        {label: 'desayuno', value: 'Jdesayuno'},
        {label: 'comida', value: 'Jcomida'},
        {label: 'cena', value: 'Jcena'}
      ])
    } else if (dia === 'Viernes') {
      return ([
        {label: 'desayuno', value: 'Vdesayuno'},
        {label: 'comida', value: 'Vcomida'},
        {label: 'cena', value: 'Vcena'}
      ])
    } else if (dia === 'Sabado') {
      return ([
        {label: 'desayuno', value: 'Sdesayuno'},
        {label: 'comida', value: 'Scomida'},
        {label: 'cena', value: 'Scena'}
      ])
    } else if (dia === 'Domingo') {
      return ([
        {label: 'desayuno', value: 'Ddesayuno'},
        {label: 'comida', value: 'Dcomida'},
        {label: 'cena', value: 'Dcena'}
      ])
    }
  }

  render(){
    const formItemLayout = {
      labelCol: {
        xs: {span: 10},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 10},
        sm: {span: 8},
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
    console.log(this.state)
    return(
      <div>
        <h1>Cocina</h1>
        <h3>Selecciona los días y las comidas que desees ordenar</h3>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
          <Form.Item
            label="Lunes">
            <CheckboxGroup options={this.options('Lunes')} onChange={this.handleChangeLunes}/>
          </Form.Item>

          <Form.Item
            label="Martes">
            <CheckboxGroup options={this.options('Martes')} onChange={this.handleChangeMartes}/>
          </Form.Item>
         
          <Form.Item
            label="Miercoles">
            <CheckboxGroup options={this.options('Miercoles')} onChange={this.handleChangeMiercoles}/>
          </Form.Item>

          <Form.Item
            label="Jueves">
            <CheckboxGroup options={this.options('Jueves')} onChange={this.handleChangeJueves}/>
          </Form.Item>

          <Form.Item
            label="Viernes">
            <CheckboxGroup options={this.options('Viernes')} onChange={this.handleChangeViernes}/>
          </Form.Item>

          <Form.Item
            label="Sabado">
            <CheckboxGroup options={this.options('Sabado')} onChange={this.handleChangeSabado}/>
          </Form.Item>

          <Form.Item
            label="Domingo">
            <CheckboxGroup options={this.options('Domingo')} onChange={this.handleChangeDomingo}/>
          </Form.Item>

          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit">Solicitar</Button>
          </Form.Item>
        </Form>  
      </div>

    )
  }

}

export default SolicitudAlimientos;