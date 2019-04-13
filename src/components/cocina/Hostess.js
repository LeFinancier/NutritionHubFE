import React, {Component} from 'react';
import axios from 'axios';


import Entrada from './Entrada';
import SegundoTiempo from './SegundoTiempo';

class Host extends Component {
  constructor(props){
    super(props)
    this.state = {
      MyData: {}
    }
  }

  getAllData = () => {
    axios.get(`http://localhost:5000/api/mi-cocina`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        MyData: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllData();
  }

  validate = (props) => {
    if(props === false) {
      return(
        <Entrada MyData={this.state.MyData} getData={() => this.props.getData()} />
      )} 
      else {
        return (
          <SegundoTiempo MyData={this.state.MyData} getData={() => this.props.getData()}/>
        )
      } 
    }


  render(){
    console.log(this.state)
    return (
      <div>
        <div>{this.validate(this.state.MyData.datosStore)}</div>
      </div>
    )
  } 
}

export default Host;