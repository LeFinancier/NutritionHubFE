import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import EditData from './EditData';


 
class DataDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingle()
  }

  getSingle = () => {
    const {params} = this.props.match;
    axios.get(`http://localhost:5000/api/mis-datos/usuario/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      const datos = responseFromApi.data;
      this.setState(datos);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  renderEditForm = () => {
    // if(!this.state.nombre) {
    //   this.getSingle()
    // } else {
      return <EditData MyData={this.state} getData={this.getSingle} {...this.props}/>
    // }
  }

  deleteData = (id) => {
    const {params} = this.props.match;
    axios.delete(`http://localhost:5000/api/mis-datos/usuario/${params.id}`, {withCredentials:true})
    .then(responseFromApi => {
      this.props.history.push('/mis-datos')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // ownershipCheck = (project) => {
  //   if(this.props.loggedInUser && project.owner === this.props.loggedInUser._id) {
  //     return (
  //       <div>
  //         <div>{this.renderEditForm()}</div>
  //         <button onClick={() => this.deleteData(this.state._id)}>Borrar</button>
  //       </div>
  //     )
  //   }
  // }

  monthCheck = () => {
    const date = new Date(this.state.createdAt)
    const month = date.getMonth()+1
    if(month === 1) {
      return 'enero'
    } else if (month === 2) {
      return 'febrero'
    } else if (month === 3) {
      return 'marzo'
    } else if (month === 4) {
      return 'abril'
    } else if (month === 5) {
      return 'mayo'
    } else if (month === 6) {
      return 'junio'
    } else if (month === 7) {
      return 'julio'
    } else if (month === 8) {
      return 'agosto'
    } else if (month === 9) {
      return 'septiembre'
    } else if (month === 10) {
      return 'octubre'
    } else if (month === 11) {
      return 'noviembre'
    } else if (month === 12) {
      return 'diciembre'
    }
  }

  render(){
    console.log(this.state)
    const date = new Date(this.state.createdAt);
    return (
      <div>
        <h1>{this.state.username}</h1>
        <p>Saludable desde el {date.getDate()} de {this.monthCheck()} de {date.getFullYear()}</p>
        {/* <div>{this.ownershipCheck(this.state)}</div> */}
        <div>{this.renderEditForm()}</div>
          <button onClick={() => this.deleteData(this.state._id)}>Borrar</button>
        <Link to={'/mis-datos'}>Regresar</Link>
      </div>
    )
  }
}

export default DataDetails;