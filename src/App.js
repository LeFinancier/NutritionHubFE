import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Perfil from './components/clientes/Perfil';
import Hostess from './components/cocina/Hostess';
import Navbar from './components/navbar/Navbar';
import DataDetails from './components/clientes/DataDetails';
import Data from './components/clientes/Datos';
import DataUpdate from './components/clientes/DataUpdate'
import Signup from './components/auth/Signup';
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/protected-route';
import Espera from './components/expert/Espera';
import AddConsultorio from './components/expert/AddConsultorio';
import UpdateConsultorio from './components/expert/UpdateConsultorio';
import Oferta from './components/ofertaExpertos/ofertaEx';
import Cita from './components/ofertaExpertos/Cita';
import Consulta from './components/expert/Consulta';
import AddCocina from './components/cocina/AddCocina';
import UpdateCocina from './components/cocina/UpdateCocina';
import Cocina from './components/ofertaExpertos/Cocina';
import SolicitudAlimentos from './components/ofertaExpertos/SolicitudAlimentos';
import Bienvenida from './components/auth/Bienvenido';
import Pedido from './components/cocina/Pedido';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {loggedInUser: null};
    this.service = new AuthService();
  }

  fetchUser() {
    if(this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        })
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        })
      })
    }
  }
  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser) {  
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
            <Switch>
              <Route exact path="/" component={Bienvenida}/>
              <Route exact path="/mis-datos" component={Perfil} />
              <Route exact path="/mis-servicios" component={Espera}/>
              <Route exact path="/mi-cocina" component={Hostess}/>
              <Route exact path="/oferta" component={Oferta}/>
              <Route exact path="/cocinas" component={Cocina}/>
              <Route exact path="/mis-datos/usuario/:id" component={DataDetails} />
              <Route exact path="/mis-datos/info/:id" render={ (props) => <Data {...props} user={this.state}/>}/>
              <Route exact path="/mis-datos/actualiza-info/:id" render={ (props) => <DataUpdate {...props} user={this.state}/>}/>
              <Route exact path="/mis-servicios/info/:id" render={ (props) => <AddConsultorio {...props} user={this.state}/>}/>
              <Route exact path="/mis-servicios/actualiza-info/:id" render={ (props) => <UpdateConsultorio {...props} user={this.state}/>}/>
              <Route exact path="/cita/:id" render={ (props) => <Cita {...props} user={this.state}/>}/>
              <Route exact path="/plan-nutricional/:id" render={ (props) => <Consulta {...props} user={this.state}/>}/>
              <Route exact path="/mi-cocina/info/:id" render={ (props) => <AddCocina {...props} user={this.state}/>}/>
              <Route exact path="/mi-cocina/actualiza-info/:id" render={ (props) => <UpdateCocina {...props} user={this.state}/>}/>
              <Route exact path="/solicitud/:id" render={ (props) => <SolicitudAlimentos {...props} user={this.state}/>}/>
              <Route exact path="/asignar-alimentos/:id" render={ (props) => <Pedido {...props} user={this.state}/>}/>

        
            </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
          <br/>
          <Switch>
            <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path="/" render={() => <Login getUser={this.getTheUser}/>}/>
            <ProtectedRoute user={this.state.loggedInUser} path="/mis-datos" component={Perfil} />
            <ProtectedRoute user={this.state.loggedInUser} path="/mis-datos/usuario/:id" component={DataDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path="/mis-datos/info/:id" component={Data} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
