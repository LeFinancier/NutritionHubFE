import React, {Component} from 'react';
import axios from 'axios';

import Dashboard from './Dashboard';


class Perfil extends Component {
  constructor () {
    super();
    this.state = { 
      MyData: [],
      main: false
    };
  }

  getAllData = () => {
    axios.get(`http://localhost:5000/api/mis-datos`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        MyData: responseFromApi.data
      })
    })
  }

  componentWillMount() {
    this.getAllData();
  }


  render(){
    console.log(this.state)
    return(
      <div>
      <Dashboard MyData={this.state} getData={() => this.getAllData()} main={this.state.MyData.main}/>
      {/* <h1>{this.state.MyData.main}</h1> */}
      </div>
    )
  }
}

export default Perfil;
