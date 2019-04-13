import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';


class Intro extends Component {
  constructor(props){
    super(props)
    this.state = {main: false}
  }

  render(){
    return (
      <div>
        <div>
            <h2>
              Ingresa los datos que quieres que tus clientes vean de tí. 
            </h2>
              <Link to={`/mis-servicios/info/${this.props.MyData._id}`}>
                <Button>Ingresa tus datos</Button>  
              </Link>
        </div>
      </div>
    )
  }
}

export default Intro