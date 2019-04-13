import React, {Component, Fragment} from 'react';
import {Card, Badge, Rate} from 'antd';
import axios from 'axios';



class Dietas extends Component {
  constructor (props){
    super(props);
    this.state = {
      key: 'tab1',
      noTitleKey: 'DietaActual',
      dietas: {},
      expert: {},
      detallesDieta: {},
      dietasAnterior: {},
      expertAnterior: {},
      detallesDietaAnterior: {}
    }
  }

  onTabChange = (key, type) => {
    this.setState({[type]: key});
  }

  tabListNoTitle = [{
    key: 'DietaActual',
    tab: 'DietaActual'
  }, {
    key: 'DietaAnterior',
    tab: 'DietaAnterior'
  }];

  componentDidUpdate(prevProps) {
    if(this.props.Data.dietas !== prevProps.Data.dietas) {
        this.updateProps()
    }
  }
  
  updateProps() {
    console.log(this.props)
    if(this.props.Data.dietas.length === 1){
    this.setState({
      dietas: this.props.Data.dietas[0],
      expert: this.props.Data.dietas[0].expert,
      detallesDieta: this.props.Data.dietas[0].detallesObjetivo
    })
    } else if(this.props.Data.dietas.length === 0) {
      this.setState({
        dietas: '',
        expert: '',
        detallesDieta: ''
      }) 
    } else if(this.props.Data.dietas.length > 1){
      this.setState({
        dietas: this.props.Data.dietas[0],
        expert: this.props.Data.dietas[0].expert,
        detallesDieta: this.props.Data.dietas[0].detallesObjetivo,
        dietasAnterior: this.props.Data.dietas[1],
        expertAnterior: this.props.Data.dietas[1].expert,
        detallesDietaAnterior: this.props.Data.dietas[1].detallesObjetivo
      })
    }
  }
  
  conditionalDieta = (dietas) => {
    if (dietas.length > 0) {
      return(
        <Fragment>
          <>Carbs: {dietas[0].carbohidratos}g - Proteinas: {dietas[0].proteinas}g - Grasas: {dietas[0].grasas}g - Calorías: {dietas[0].energia} <br/></>
          <>Colaciones: {dietas[0].colaciones} <br/></>
          <>Comentarios: {dietas[0].comentarios}</>
        </Fragment>
      )
    } else {
      return (
        <Badge count={1}>
        <><b>No se asigno comida</b></>
        </Badge>
      )
    }
  }

  conditionalDietaAnterior = (dietas) => {
    if (dietas.length > 1) {
      return(
        <Fragment>
          <>Carbs: {dietas[1].carbohidratos}g - Proteinas: {dietas[1].proteinas}g - Grasas: {dietas[1].grasas}g - Calorías: {dietas[1].energia} <br/></>
          <>Colaciones: {dietas[1].colaciones} <br/></>
          <>Comentarios: {dietas[1].comentarios}</>
        </Fragment>
      )
    } else {
      return (
        <Badge count={1}>
        <><b>No se han asignado valores</b></>
        </Badge>
      )
    }
  }

  // handleRating = (value) => {
  //   const  = this.state;
  //   const descripcionObjetivo = this.state.descripcionObjetivo;
  //   const direccion = this.state.direccion;
  //   const ejercicio = this.state.ejercicio;
  //   const alergias = this.state.alergias;
  //   const {params} = this.props.match

  //   axios.put(`http://localhost:5000/api/mis-datos/actualiza-info/${params.id}`, {nombre, descripcionObjetivo, direccion, ejercicio, alergias},{withCredentials: true})
  //     .then(() => {
  //       this.props.history.push('/mis-datos');
  //     })
  //     .catch (error => console.log(error))

  // }

  contentListNoTitle =() => {
    if(this.state.noTitleKey === 'DietaActual' && this.state.expert.nombre !== undefined){
      return (
        <div>
          <h3>{this.state.expert.nombre}</h3>
          <p><b>Objetivos</b></p>
          <p>Peso: {this.state.detallesDieta.peso}- Músculo: {this.state.detallesDieta.musculo}</p>
          <p>Talla abdomen: {this.state.detallesDieta.abdomen} - Talla pecho: {this.state.detallesDieta.pecho}</p>
          <p><b>Desayuno</b> <br/> {this.conditionalDieta(this.state.dietas.dieta.desayuno)}</p>
          <p><b>Comida</b> <br/>{this.conditionalDieta(this.state.dietas.dieta.comida)}</p>
          <p><b>Cena</b> <br/>{this.conditionalDieta(this.state.dietas.dieta.cena)}</p>
          {/* <Rate value={this.state.expert.rating} onChange={() => this.handleRating}/>  */}
        </div>
        )
    } else if(this.state.noTitleKey === 'DietaAnterior' && this.state.expertAnterior.nombre !== undefined){
        return(
        <div>
        <h3>{this.state.expertAnterior.nombre}</h3>
        <p><b>Objetivos</b></p>
        <p>Peso: {this.state.detallesDietaAnterior.peso} - Músculo: {this.state.detallesDietaAnterior.musculo}</p>
        <p>Talla abdomen: {this.state.detallesDietaAnterior.abdomen} - Talla pecho: {this.state.detallesDietaAnterior.pecho}</p>
        <p><b>Desayuno:</b> <br/> {this.conditionalDietaAnterior(this.state.dietas.dieta.desayuno)}</p>
        <p><b>Comida:</b> <br/> {this.conditionalDietaAnterior(this.state.dietas.dieta.comida)}</p>
        <p><b>Cena:</b> <br/> {this.conditionalDietaAnterior(this.state.dietas.dieta.cena)}</p>
      </div>
      )
    } else if (this.state.noTitleKey === 'DietaActual' || this.state.noTitleKey === 'DietaAnterior'){
      return (
        <div>
          <h3>No has solicitado un plan de nutrición</h3>
        </div>
      )
    }
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <Card 
          style={{width: '100%'}}
          tabList={this.tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => {this.onTabChange(key,'noTitleKey');}}
          > 
          {this.contentListNoTitle()}
        </Card>
      </div>
    )
  } 
  
}

export default Dietas;