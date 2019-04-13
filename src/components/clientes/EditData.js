import React, {Component} from 'react';
import axios from 'axios';

class EditData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      oldusername: '',
      oldpassword: ''
    };
    
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleChangeoldUser = this.handleChangeoldUser.bind(this)
    this.handleChangeoldPass = this.handleChangeoldPass.bind(this)
  }

  handleFormSubmit = (event) => {
    if(this.state.username === '' && this.state.password === '') {
      alert('Ingresa datos para hacer el cambio')
    } else if (this.state.oldpassword === '' && this.state.oldusername === ''){
      alert('Debes validar tu usuario y password antes de continuar')
    } else if(this.state.username === '' && this.state.password !== ''){
      const username = this.state.oldusername;
      const password = this.state.password;
    
      event.preventDefault();

      axios.put(`${process.env.REACT_APP_API_URL}/mis-datos/usuario/${this.props.MyData._id}`, {username, password}, {withCredentials:true})
      .then ( () => {
        this.props.getData();
        this.props.history.push('/mis-datos');
      })
      .catch( error => console.log(error))
    } else if(this.state.username !== '' && this.state.password === ''){
      const username = this.state.username;
      const password = this.state.oldpassword;
    
      event.preventDefault();

      axios.put(`${process.env.REACT_APP_API_URL}/mis-datos/usuario/${this.props.MyData._id}`, {username, password}, {withCredentials:true})
      .then ( () => {
        this.props.getData();
        this.props.history.push('/mis-datos');
      })
      .catch( error => console.log(error))
    }
    else {
      const username = this.state.username;
      const password = this.state.password;
      
      event.preventDefault();

      axios.put(`${process.env.REACT_APP_API_URL}/mis-datos/usuario/${this.props.MyData._id}`, {username, password}, {withCredentials:true})
      .then ( () => {
        this.props.getData();
        this.props.history.push('/mis-datos');
      })
      .catch( error => console.log(error))
    }
  }

  handleChangeoldUser = (event) => {
    this.setState({
      oldusername: event.target.value
    })
    console.log(this.state)
  }

  handleChangeoldPass = (event) => {
    this.setState({
      oldpassword: event.target.value
    })
    console.log(this.state)
  }

  handleChangeUser = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state)
  }

  handleChangePass = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <hr/>
        <h3>Actualizar usuario y contraseña</h3>
        <p>Si dejas alguno de los campos vacios nosotros tomaremos los datos con los que ingresaste a tu sesión por default.</p>
        <p>Vuelve a iniciar sesión para que los datos se actualicen por completo</p>
        <form onSubmit={this.handleFormSubmit}>

          <p>Confirma tu usuario y contraseña antes de solicitar el cambio</p>
          <label>Usuario actual</label>
          <input type="text" name="usuarioanterior" value={this.state.oldusername} onChange={e => this.handleChangeoldUser(e)}/>

          <label>Password actual</label>
          <textarea type="text" name="passwordanterior" value={this.state.oldpassword} onChange={e => this.handleChangeoldPass(e)}/>
          
          <p>Ingresa tus nuevos datos</p>
          <label>Usuario nuevo</label>
          <input type="text" name="nombre" value={this.state.username} onChange={e => this.handleChangeUser(e)}/>

          <label>Password nuevo</label>
          <textarea type="text" name="password" value={this.state.password} onChange={e => this.handleChangePass(e)}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default EditData;