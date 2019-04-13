import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

import AddWeight from './AddWeight';
import Dietas from './Dietas';
import Comidas from './Comidas';

class Regreso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: '',
      Weight: ''
    }
  }

componentDidUpdate(prevProps) {
  if(this.props.MyData.MyData.MyData.main !== prevProps.MyData.MyData.MyData.main || this.props.MyData.MyData.MyData.main[0].detalles[0] !== prevProps.MyData.MyData.MyData.main[0].detalles[0]) {
      this.updateProps()
  }
}

updateProps() {
  this.setState({
    MyData: this.props.MyData.MyData.MyData.main[0],
    Weight: this.props.MyData.MyData.MyData.main[0].detalles[0].detalles
  })
}

  render(){
    console.log(this.props)
    return(
      <div>
      <div style={{width: '50%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
          <h1>{this.props.MyData.MyData.MyData.username}</h1>
            <Link to={`/mis-datos/usuario/${this.props.MyData.MyData.MyData._id}`}>
              <Button>Actualizar usuario</Button>  
            </Link>
      </div>
      <div style={{width: '50%', float: "right", height:'25%', margin:'2em 0 3em 0'}}>
            <h3>{this.state.MyData.descripcionObjetivo}</h3>
            <p>{this.state.MyData.direccion}</p>
            <p>{this.state.MyData.ejercicio}</p>
            <p>Peso: {this.state.Weight.peso}kg - Musculo: {this.state.Weight.musculo}kg - Grasa: {this.state.Weight.grasa}%</p>
            <p>Talla de abdomen: {this.state.Weight.abdomen}cm - Talla de pecho: {this.state.Weight.pecho}cm</p>
            <Link to={`/mis-datos/actualiza-info/${this.state.MyData._id}`}>
              <Button>Actualiza tus datos</Button>  
            </Link>
      </div>
      <div style={{width: '100%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
        
        <AddWeight Data={this.state.MyData}/>
        <br/>
        <Dietas Data={this.state.MyData}/>
        <br/>
        <Comidas Data={this.state.MyData}/>

      </div>
    </div>
    )
  }
}

export default Regreso;