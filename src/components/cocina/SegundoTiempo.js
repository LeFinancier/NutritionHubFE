import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {List, Card, Button, Badge, Table} from 'antd';


class SegundoTiempo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: {
        MyData: { 
          store: []
        }
      },
      Pedidos: ''
    }
  }


componentDidUpdate(prevProps) {
  if(this.props.MyData.store !== prevProps.MyData.store) {
      this.updateProps()
  }
}

updateProps() {
  this.setState({
    MyData: this.props.MyData.store[0],
    Pedidos: this.props.MyData.store[0].pedidos
  })
}

conditionalDesayuno = (comida) => {
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
  } 
}

pedidos = (store) => {
  if(store.length === 0) {
    return <h3>Aquí podrás ver la información de tus pedidos</h3>
  } else {
    return (
      <div>
      <List
          grid={{
            gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5
          }}
          dataSource={this.state.Pedidos}
          renderItem={item => (
            <List.Item> 
              <Card title={item.cliente.nombre}>
              <p>{item.cliente.direccion}</p>
              <p>Desayuno</p>
              <p>{this.conditionalDesayuno(item)}</p>
              <p>{this.conditionalCom(item)}</p>
              <p>{this.conditionalCena(item)}</p>

                <Link to={`/asignar-alimentos/${item._id}`}>
                  <Button>Atender</Button>
                </Link>
              </Card>
            </List.Item>
          )}
          />
      </div>
    )
  }
}

  render(){
    console.log(this.props)
    console.log(this.state)
    return(
      <div>
      <div style={{width: '50%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
          <h1>{this.state.MyData.nombre}</h1>
      </div>
      <div style={{width: '50%', float: "right", height:'25%', margin:'2em 0 3em 0'}}>
            <h3>{this.state.MyData.direccion}</h3>
            <p>Condiciones: {this.state.MyData.condicionesEntrega}</p>
            <p>{this.state.MyData.descripcion}</p>
            <p>Rating: {this.state.MyData.rating} - Número de pedidos: {this.state.Pedidos.length}</p>
      </div>
      <div style={{width: '100%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
        <Link to={`/mi-cocina/actualiza-info/${this.state.MyData._id}`}>
          <Button>Actualizar usuario</Button>  
        </Link>
      </div>
      <h1>Pedidos</h1>
      {this.pedidos(this.state.Pedidos)}
    </div>
    )
  }
}

export default SegundoTiempo;