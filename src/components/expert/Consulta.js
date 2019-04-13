import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Input} from 'antd';



class Consulta extends Component{
  constructor(props){
    super(props);
    this.state = {
          Dcarbohidratos: 0,
          Denergia: 0, 
          Dproteinas: 0,
          Dgrasas: 0,
          Dcolaciones: '',
          Dcomentarios: '',
          Lcarbohidratos: 0,
          Lenergia: 0, 
          Lproteinas: 0,
          Lgrasas: 0,
          Lcolaciones: '',
          Lcomentarios: '',
          Ccarbohidratos: 0,
          Cenergia: 0, 
          Cproteinas: 0,
          Cgrasas: 0,
          Ccolaciones: '',
          Ccomentarios: ''
        }
    
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const Dcarb = this.state.Dcarbohidratos;
    const Denergia = this.state.Denergia;
    const Dproteinas = this.state.Dproteinas;
    const Dgrasas = this.state.Dgrasas;
    const Dcolaciones = this.state.Dcolaciones;
    const Dcomentarios = this.state.Dcomentarios;
    
    const Lcarb = this.state.Lcarbohidratos;
    const Lenergia = this.state.Lenergia;
    const Lproteinas = this.state.Lproteinas;
    const Lgrasas = this.state.Lgrasas;
    const Lcolaciones = this.state.Lcolaciones;
    const Lcomentarios = this.state.Lcomentarios;

    const Ccarb = this.state.Ccarbohidratos;
    const Cenergia = this.state.Cenergia;
    const Cproteinas = this.state.Cproteinas;
    const Cgrasas = this.state.Cgrasas;
    const Ccolaciones = this.state.Ccolaciones;
    const Ccomentarios = this.state.Ccomentarios;
  
    
    const {params} = this.props.match

    axios.put(`${process.env.REACT_APP_API_URL}/plan-nutricional/${params.id}`, {Dcarb, Denergia, Dproteinas, Dgrasas, Dcolaciones, Dcomentarios, Lcarb, Lenergia, Lproteinas, Lgrasas, Lcolaciones, Lcomentarios, Ccarb, Cenergia, Cproteinas, Cgrasas, Ccolaciones, Ccomentarios},{withCredentials: true})
      .then(() => {
        this.setState({
          Dcarbohidratos: 0,
          Denergia: 0, 
          Dproteinas: 0,
          Dgrasas: 0,
          Dcolaciones: '',
          Dcomentarios: '',
          Lcarbohidratos: 0,
          Lenergia: 0, 
          Lproteinas: 0,
          Lgrasas: 0,
          Lcolaciones: '',
          Lcomentarios: '',
          Ccarbohidratos: 0,
          Cenergia: 0, 
          Cproteinas: 0,
          Cgrasas: 0,
          Ccolaciones: '',
          Ccomentarios: ''
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
    console.log(this.state)
    return(
      <div>
        <h1>Consulta</h1>
        <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
          <h3>Desayuno</h3>
          <Form.Item
            label="Carbohidratos">
            <Input type="number" name="Dcarbohidratos" value={this.state.Dcarbohidratos} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Proteínas">
            <Input type="number" name="Dproteinas" value={this.state.Dproteinas} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Grasas">
            <Input type="number" name="Dgrasas" value={this.state.Dgrasas} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Total de calorías">
            <Input type="number" name="Denergia" value={this.state.Denergia} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Colaciones">
            <TextArea type="text" name="Dcolaciones" value={this.state.Dcolaciones} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comentarios adicionales">
            <TextArea type="text" name="Dcomentarios" value={this.state.Dcomentarios} onChange={e => this.handleChange(e)}/>
          </Form.Item>


          <h3>Comida</h3>
          <Form.Item
            label="Carbohidratos">
            <Input type="number" name="Lcarbohidratos" value={this.state.Lcarbohidratos} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Proteínas">
            <Input type="number" name="Lproteinas" value={this.state.Lproteinas} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Grasas">
            <Input type="number" name="Lgrasas" value={this.state.Lgrasas} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Total de calorías">
            <Input type="number" name="Lenergia" value={this.state.Lenergia} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Colaciones">
            <TextArea type="text" name="Lcolaciones" value={this.state.Lcolaciones} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comentarios adicionales">
            <TextArea type="text" name="Lcomentarios" value={this.state.Lcomentarios} onChange={e => this.handleChange(e)}/>
          </Form.Item>


          <h3>Cena</h3>
          <Form.Item
            label="Carbohidratos">
            <Input type="number" name="Ccarbohidratos" value={this.state.Ccarbohidratos} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Proteínas">
            <Input type="number" name="Cproteinas" value={this.state.Cproteinas} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Grasas">
            <Input type="number" name="Cgrasas" value={this.state.Cgrasas} onChange={e => this.handleChange(e)}/>
          </Form.Item>
         
          <Form.Item
            label="Total de calorías">
            <Input type="number" name="Cenergia" value={this.state.Cenergia} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Colaciones">
            <TextArea type="text" name="Ccolaciones" value={this.state.Ccolaciones} onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Comentarios adicionales">
            <TextArea type="text" name="Ccomentarios" value={this.state.Ccomentarios} onChange={e => this.handleChange(e)}/>
          </Form.Item>


          <Form.Item {...tailFormLatout}>
            <Button type="primary" htmlType="submit">Agregar</Button>
          </Form.Item>
        </Form>
        <Link to={'/mis-servicios'}>Regresar</Link> 
      </div>
    )
  }
}

export default Consulta;