import React, {Component, Fragment} from 'react';
import {Card, Badge} from 'antd';


class Comidas extends Component {
  constructor (props){
    super(props);
    this.state = {
      key: 'tab1',
      noTitleKey: 'PedidosProgramados',
      comidas: {},
      store: {},
      comidasAnterior: {},
      storeAnterior: {},
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.Data.comidas !== prevProps.Data.comidas) {
        this.updateProps()
    }
  }

  tabListNoTitle = [{
    key: 'PedidosProgramados',
    tab: 'Pedidos Programados'
  }, {
    key: 'PedidosAnteriores',
    tab: 'Pedidos Anteriores'
  }];

  updateProps() {
    if(this.props.Data.comidas.length === 1){
    this.setState({
      comidas: this.props.Data.comidas[0],
      store: this.props.Data.comidas[0].store,
    })
    } else if(this.props.Data.comidas.length === 0) {
      this.setState({
        comidas: '',
        store: '',
      }) 
    } else if(this.props.Data.comidas.length > 1){
      this.setState({
        comidas: this.props.Data.comidas[0],
        store: this.props.Data.comidas[0].store,
        comidasAnterior: this.props.Data.comidas[1],
        storeAnterior: this.props.Data.comidas[1].store,
      })
    }
  }
  
  conditionalDesayuno = (comida) => {
    var des = []
    console.log(comida.jueves.comida)
    if(comida.lunes.desayuno !== ''){
      des.push({dia: 'Lunes', desayuno: comida.lunes.desayuno, entrega: comida.lunes.entrega})
    }
    if(comida.martes.desayuno !== ''){
      des.push({dia: 'Martes', desayuno: comida.martes.desayuno, entrega: comida.martes.entrega})
    }
    if(comida.miercoles.desayuno !== ''){
      des.push({dia: 'Miércoles', desayuno: comida.miercoles.desayuno, entrega: comida.miercoles.entrega})
    }
    if(comida.jueves.desayuno !== ''){
      des.push({dia: 'Jueves', desayuno: comida.jueves.desayuno, entrega: comida.jueves.entrega})
    }
    if(comida.viernes.desayuno !== ''){
      des.push({dia: 'Viernes', desayuno: comida.viernes.desayuno, entrega: comida.viernes.entrega})
    }
    if(comida.sabado.desayuno !== ''){
      des.push({dia: 'Sábado', desayuno: comida.sabado.desayuno, entrega: comida.sabado.entrega})
    }
    if(comida.domingo.desayuno !== ''){
      des.push({dia: 'Domingo', desayuno: comida.domingo.desayuno, entrega: comida.domingo.entrega})
    }
    if (des.length > 0) {
      const day = des.map((element,key) => (
        <span key={key}>
          {element.dia}: {element.desayuno} - Entrega: {element.entrega} <br/>
        </span>
        )
      )
      return (
        <Fragment>{day}</Fragment>
      )
    } else {
      return (
        <><b>No se asigno comida</b></>
      )
    }
  }

  conditionalCom = (comida) => {
    var com = []
    
    if(comida.lunes.comida !== ''){
      com.push({dia: 'Lunes', comida: comida.lunes.comida, entrega: comida.lunes.entrega})
    }
    if(comida.martes.comida !== ''){
      com.push({dia: 'Martes', comida: comida.martes.comida, entrega: comida.martes.entrega})
    }
    if(comida.miercoles.comida !== ''){
      com.push({dia: 'Miércoles', comida: comida.miercoles.comida, entrega: comida.miercoles.entrega})
    }
    if(comida.jueves.comida !== ''){
      com.push({dia: 'Jueves', comida: comida.jueves.comida, entrega: comida.jueves.entrega})
    }
    if(comida.viernes.comida !== ''){
      com.push({dia: 'Viernes', comida: comida.viernes.comida, entrega: comida.viernes.entrega})
    }
    if(comida.sabado.comida !== ''){
      com.push({dia: 'Sábado', comida: comida.sabado.comida, entrega: comida.sabado.entrega})
    }
    if(comida.domingo.comida !== ''){
      com.push({dia: 'Domingo', comida: comida.domingo.comida, entrega: comida.domingo.entrega})
    }
    if (com.length > 0) {
      const day = com.map((element,key) => (
        <span key={key}>
          {element.dia}: {element.comida} - Entrega: {element.entrega} <br/>
        </span>
        )
      )
      return (
        <Fragment>{day}</Fragment>
      )
    } else {
      return (
        <><b>No se asigno comida</b></>
      )
    }
  }

  conditionalCena = (comida) => {
    var cen = []

    if(comida.lunes.cena !== ''){
      cen.push({dia: 'Lunes', cena: comida.lunes.cena, entrega: comida.lunes.entrega})
    }
    if(comida.martes.cena !== ''){
      cen.push({dia: 'Martes', cena: comida.martes.cena, entrega: comida.martes.entrega})
    }
    if(comida.miercoles.cena !== ''){
      cen.push({dia: 'Miércoles', cena: comida.miercoles.cena, entrega: comida.miercoles.entrega})
    }
    if(comida.jueves.cena !== ''){
      cen.push({dia: 'Jueves', cena: comida.jueves.cena, entrega: comida.jueves.entrega})
    }
    if(comida.viernes.cena !== ''){
      cen.push({dia: 'Viernes', cena: comida.viernes.cena, entrega: comida.viernes.entrega})
    }
    if(comida.sabado.cena !== ''){
      cen.push({dia: 'Sábado', cena: comida.sabado.cena, entrega: comida.sabado.entrega})
    }
    if(comida.domingo.cena !== ''){
      cen.push({dia: 'Domingo', cena: comida.domingo.cena, entrega: comida.domingo.entrega})
    }
    if (cen.length > 0) {
      const day = cen.map((element,key) => (
        <span key={key}>
          {element.dia}: {element.cena} - Entrega: {element.entrega} <br/>
        </span>
        )
      )
      return (
        <Fragment>{day}</Fragment>
      )
    } else {
      return (
        <><b>No se asigno comida</b></>
      )
    }
  }

  conditionalDesayunoAnterior = (comida) => {
    var des = []

    if(comida.lunes.desayuno !== ''){
      des.push({dia: 'Lunes', desayuno: comida.lunes.desayuno, entrega: comida.lunes.entrega})
    }
    if(comida.martes.desayuno !== ''){
      des.push({dia: 'Martes', desayuno: comida.martes.desayuno, entrega: comida.martes.entrega})
    }
    if(comida.miercoles.desayuno !== ''){
      des.push({dia: 'Miércoles', desayuno: comida.miercoles.desayuno, entrega: comida.miercoles.entrega})
    }
    if(comida.jueves.desayuno !== ''){
      des.push({dia: 'Jueves', desayuno: comida.jueves.desayuno, entrega: comida.jueves.entrega})
    }
    if(comida.viernes.desayuno !== ''){
      des.push({dia: 'Viernes', desayuno: comida.viernes.desayuno, entrega: comida.viernes.entrega})
    }
    if(comida.sabado.desayuno !== ''){
      des.push({dia: 'Sábado', desayuno: comida.sabado.desayuno, entrega: comida.sabado.entrega})
    }
    if(comida.domingo.desayuno !== ''){
      des.push({dia: 'Domingo', desayuno: comida.domingo.desayuno, entrega: comida.domingo.entrega})
    }
    if (des.length > 0) {
      const day = des.map((element,key) => (
        <span key={key}>
          {element.dia}: {element.desayuno} - Entrega: {element.entrega} <br/>
        </span>
        )
      )
      return (
        <Fragment>{day}</Fragment>
      )
    } else {
      return (
        <><b>No se asigno comida</b></>
      )
    }
  }

  conditionalComAnterior = (comida) => {
    var com = []

    if(comida.lunes.comida !== ''){
      com.push({dia: 'Lunes', comida: comida.lunes.comida, entrega: comida.lunes.entrega})
    }
    if(comida.martes.comida !== ''){
      com.push({dia: 'Martes', comida: comida.martes.comida, entrega: comida.martes.entrega})
    }
    if(comida.miercoles.comida !== ''){
      com.push({dia: 'Miércoles', comida: comida.miercoles.comida, entrega: comida.miercoles.entrega})
    }
    if(comida.jueves.comida !== ''){
      com.push({dia: 'Jueves', comida: comida.jueves.comida, entrega: comida.jueves.entrega})
    }
    if(comida.viernes.comida !== ''){
      com.push({dia: 'Viernes', comida: comida.viernes.comida, entrega: comida.viernes.entrega})
    }
    if(comida.sabado.comida !== ''){
      com.push({dia: 'Sábado', comida: comida.sabado.comida, entrega: comida.sabado.entrega})
    }
    if(comida.domingo.comida !== ''){
      com.push({dia: 'Domingo', comida: comida.domingo.comida, entrega: comida.domingo.entrega})
    }
    if (com.length > 0) {
      const day = com.map((element,key) => (
        <span key={key}>
          {element.dia}: {element.comida} - Entrega: {element.entrega} <br/>
        </span>
        )
      )
      return (
        <Fragment>{day}</Fragment>
      )
    } else {
      return (
        <><b>No se asigno comida</b></>
      )
    }
  }

  conditionalCenaAnterior = (comida) => {
    var cen = []

    if(comida.lunes.cena !== ''){
      cen.push({dia: 'Lunes', cena: comida.lunes.cena, entrega: comida.lunes.entrega})
    }
    if(comida.martes.cena !== ''){
      cen.push({dia: 'Martes', cena: comida.martes.cena, entrega: comida.martes.entrega})
    }
    if(comida.miercoles.cena !== ''){
      cen.push({dia: 'Miércoles', cena: comida.miercoles.cena, entrega: comida.miercoles.entrega})
    }
    if(comida.jueves.cena !== ''){
      cen.push({dia: 'Jueves', cena: comida.jueves.cena, entrega: comida.jueves.entrega})
    }
    if(comida.viernes.cena !== ''){
      cen.push({dia: 'Viernes', cena: comida.viernes.cena, entrega: comida.viernes.entrega})
    }
    if(comida.sabado.cena !== ''){
      cen.push({dia: 'Sábado', cena: comida.sabado.cena, entrega: comida.sabado.entrega})
    }
    if(comida.domingo.cena !== ''){
      cen.push({dia: 'Domingo', cena: comida.domingo.cena, entrega: comida.domingo.entrega})
    }
    if (cen.length > 0) {
      const day = cen.map((element,key) => (
        <span key={key}>
          {element.dia}: {element.cena} - Entrega: {element.entrega} <br/>
        </span>
        )
      )
      return (
        <Fragment>{day}</Fragment>
      )
    } else {
      return (
        <><b>No se asigno comida</b></>
      )
    }
  }

  contentListNoTitle = () => {
    if(this.state.noTitleKey === 'PedidosProgramados' && this.state.store.nombre !== undefined){
      return (
        <div>
          <h3>{this.state.store.nombre}</h3>
          
          <p><b>Desayuno</b> <br/> {this.conditionalDesayuno(this.state.comidas)}</p>
          <p><b>Comida</b> <br/>{this.conditionalCom(this.state.comidas)}</p>
          <p><b>Cena</b> <br/>{this.conditionalCena(this.state.comidas)}</p>
          {/* <Rate value={this.state.expert.rating} onChange={() => this.handleRating}/>  */}
        </div>
        )
    } else if(this.state.noTitleKey === 'PedidosAnteriores' && this.state.storeAnterior.nombre !== undefined){
        return(
        <div>
        <h3>{this.state.storeAnterior.nombre}</h3>
        
        <p><b>Desayuno:</b> <br/> {this.conditionalDesayunoAnterior(this.state.comidasAnterior)}</p>
        <p><b>Comida:</b> <br/> {this.conditionalComAnterior(this.state.comidasAnterior)}</p>
        <p><b>Cena:</b> <br/> {this.conditionalCenaAnterior(this.state.comidasAnterior)}</p>
      </div>
      )
    } else if (this.state.noTitleKey === 'PedidosProgramados' || this.state.noTitleKey === 'PedidosAnteriores'){
      return (
        <div>
          <h3>No has solicitado alimentos</h3>
        </div>
      )
    }
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({[type]: key});
  }

  render(){
    console.log(this.props)
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

export default Comidas;