import React, {Component} from 'react';
import axios from 'axios';

import Intro from './Intro';
import Consultorio from './Consultorio'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      MyData: {
        expert: [],
        datosExpert: '',
      }
    }
  }

  getAllData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/mis-servicios`, {withCredentials:true})
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
        <Intro MyData={this.state.MyData} getData={() => this.props.getData()} />
      )} 
      else {
        return (
          <Consultorio MyData={this.state.MyData} getData={() => this.props.getData()}/>
        )
      } 
    }


  render(){
    console.log(this.state.MyData)
    return (
      <div>
        <div>{this.validate(this.state.MyData.datosExpert)}</div>
      </div>
    )
  } 
}

export default Dashboard;