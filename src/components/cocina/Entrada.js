import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';


class Entrada extends Component {
  constructor(props){
    super(props)
    this.state = {main: false}
  }

  render(){
    return (
      <div>
        <div>
            <h2>
              Ingresa los datos de tu cocina. 
            </h2>
              <Link to={`/mi-cocina/info/${this.props.MyData._id}`}>
                <Button>Ingresa tus datos</Button>  
              </Link>
        </div>
      </div>
    )
  }
}

export default Entrada;