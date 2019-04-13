import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Input} from 'antd';


class addWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      estatura: 0,
      grasa: 0,
      musculo: 0,
      agua: 0,
      abdomen: 0,
      pecho: 0
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const peso = this.state.peso
    const estatura = this.state.estatura
    const grasa = this.state.grasa
    const musculo = this.state.musculo
    const agua = this.state.agua
    const abdomen = this.state.abdomen
    const pecho = this.state.pecho
    const cliente = this.props.Data._id

    axios.post(`${process.env.REACT_APP_API_URL}/mis-datos`, {peso, estatura, grasa, musculo, agua, abdomen, pecho, cliente})
      .then( () => {
        this.setState({
          peso: 0,
          estatura: 0,
          grasa: 0,
          musculo: 0,
          agua: 0,
          abdomen: 0,
          pecho: 0
        });
      })
      .catch (error => console.log(error))
  }

  handleChange = (event) => {
    const {id, value} = event.target;
    this.setState({[id]: value})
  }

  render(){
    return(
      <div>
        <Form layout="inline" onSubmit={this.handleFormSubmit}>
          <Form.Item
            label="Peso">
            <Input defaultValue={0} 
            min={0}
            step={0.1}
            type="number"
            id="peso" 
            suffix="kg"
            style={{width: "5em"}}
            value={this.state.peso}  
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Estatura">
            <Input defaultValue={0} 
            min={0}
            step={0.1}
            type="number"
            id="estatura"
            suffix="m" 
            style={{width: "5em"}}
            value={this.state.estatura} 
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Grasa">
            <Input
            defaultValue={0}
            min={0}
            max={100}
            step={0.1}
            type="number"
            id="grasa" 
            suffix="%"
            style={{width: "5em"}}
            value={this.state.grasa} 
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Musculo">
            <Input defaultValue={0} 
            min={0}
            step={0.1}
            type="number"
            id="musculo" 
            suffix="kg"
            style={{width: "5em"}}
            value={this.state.musculo} 
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Agua">
            <Input
            defaultValue={0}
            min={0}
            max={100}
            step={0.1}
            type="number"
            id="agua" 
            suffix="%"
            style={{width: "5em"}}
            value={this.state.agua} 
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Abdomen">
            <Input defaultValue={0} 
            min={0}
            step={0.1}
            type="number"
            id="abdomen"
            suffix="cm" 
            style={{width: "5em"}}
            value={this.state.abdomen} 
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item
            label="Pecho">
            <Input defaultValue={0} 
            min={0}
            step={0.1}
            type="number"
            id="pecho" 
            suffix="cm"
            style={{width: "5em"}}
            value={this.state.pecho} 
            onChange={e => this.handleChange(e)}/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Agregar</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default addWeight;

