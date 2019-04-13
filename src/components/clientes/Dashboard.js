import React, {Component} from 'react';
import Inicio from './Primer';
import Regreso from './Segundo'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  validate = (props) => {
    if(props === true) {
      return(
        <Inicio MyData={this.props} getData={() => this.props.getData()} />
      )} else {
        return (
          <Regreso MyData={this.props} getData={() => this.props.getData()}/>
        )
      } 
    }


  render(){
    return (
      <div>
        <div>{this.validate(this.props.MyData.MyData.inicio)}</div>
      </div>
    )
  } 
}

export default Dashboard;