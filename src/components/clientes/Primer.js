import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

import AddWeight from './AddWeight';

class Inicio extends Component {
  constructor(props){
    super(props)
    this.state = {main: false}
  }

  render(){
    return (
      <div>
        <div style={{width: '50%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
            <h1>{this.props.MyData.MyData.MyData.username}</h1>
              <Link to={`/mis-datos/usuario/${this.props.MyData.MyData.MyData._id}`}>
                <Button>Actualizar usuario</Button>  
              </Link>
        </div>
        <div style={{width: '50%', float: "right", height:'25%', margin:'2em 0 3em 0'}}>
            <h3>
              En esta sección aparecerán tus datos generales. <br/>
              ¡Ingrésalos para empezar con tu plan de nutrición!
            </h3>
              <Link to={`/mis-datos/info/${this.props.MyData.MyData.MyData._id}`}>
                <Button>Ingresa tus datos</Button>  
              </Link>
        </div>
        <div style={{width: '100%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
          
          <p>
            Esta barra te ayudará a ingresar los cambios obtenidos para dar seguimiento a tu progreso.
          </p>
          <AddWeight getData={() => this.props.getData()}/>
    
          {/* <AddData getData={() => this.getAllData()} /> */}
        </div>
      </div>
    )
  }
}

export default Inicio