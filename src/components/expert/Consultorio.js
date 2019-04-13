import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {List, Card, Button, Badge, Icon} from 'antd';


class Regreso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyData: {
        MyData: {
          expert: []
        }
      },
      Dietas: {
        MyData: {
          expert: [{
            dietas: '' 
          }]
        }
      }
    }
  }


componentDidUpdate(prevProps) {
  if(this.props.MyData.expert[0] !== prevProps.MyData.expert[0] || this.props.MyData.expert[0].dietas !== prevProps.MyData.expert[0].dietas) {
      this.updateProps()
  }
}

updateProps() {
  this.setState({
    MyData: this.props.MyData.expert[0],
    Dietas: this.props.MyData.expert[0].dietas
  })
}

conditionalDesayuno = (desayuno) => {
  if(desayuno.length === 0) {
    return (
      <div>
      <Badge count={1}>
        <p>Desayuno  </p>
        <p>No se ha asignado un desayuno</p>
      </Badge>
    </div>
    )
  } else {
    return (
      <div>
        <p>Desayuno  </p>
        <p>Carbs: {desayuno[0].carbohidratos}g, Proteinas: {desayuno[0].proteinas}g, Energía: {desayuno[0].energia}kcal, Grasas: {desayuno[0].grasas}g</p>
      </div>
    )
  }
}
conditionalComida = (comida) => {
  console.log(comida)
  if(comida.length === 0) {
    return (
      <div>
        <Badge count={1}>
          <p>Comida  </p>
          <p>No se ha asignado una comida</p>
        </Badge>
      </div>
    )
  } else {
    return (
      <div>
        <p>Comida  </p>
        <p>Carbs: {comida[0].carbohidratos}g, Proteinas: {comida[0].proteinas}g, Energía: {comida[0].energia}kcal, Grasas: {comida[0].grasas}g</p>
      </div>
    )
  }
}
conditionalCena = (cena) => {
  if(cena.length === 0) {
    return (
      <div>
      <Badge count={1}>
        <p>Comida  </p>
        <p>No se ha asignado una cena</p>
      </Badge>
    </div>
    )
  } else {
    return (
      <div>
        <p>Cena  </p>
        <p>Carbs: {cena[0].carbohidratos}g, Proteinas: {cena[0].proteinas}g, Energía: {cena[0].energia}kcal, Grasas: {cena[0].grasas}g</p>
      </div>
      )
  }
}

dietas = () => {
  if(this.state.Dietas.MyData) {
    return <div><h1>Aquí podrás ver la información de tus clientes</h1></div>
  } else {
    return (
      <div>
      <List
          grid={{
            gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5
          }}
          dataSource={this.state.Dietas}
          renderItem={item => (
            <List.Item> 
              <Card title={item.cliente.nombre}>
                <p><b>Objetivos</b></p>
                <p>{item.cliente.descripcionObjetivo}</p>
                <p>Peso: {item.detallesObjetivo.peso} - Grasa: {item.detallesObjetivo.grasa} - Músculo: {item.detallesObjetivo.musculo} - Abdomen: {item.detallesObjetivo.abdomen} - Pecho: {item.detallesObjetivo.pecho}</p>
                <p><b>Actividades físicas y peso actual</b></p>
                <p>{item.cliente.ejercicio}</p>
                <p>Peso: {item.cliente.detalles[0].detalles.peso} - Grasa: {item.cliente.detalles[0].detalles.grasa} - Músculo: {item.cliente.detalles[0].detalles.musculo} - Abdomen: {item.cliente.detalles[0].detalles.abdomen} - Pecho: {item.cliente.detalles[0].detalles.pecho}</p>
                <p><b>Dieta</b></p>
                {this.conditionalDesayuno(item.dieta.desayuno)}
                {this.conditionalComida(item.dieta.comida)}
                {this.conditionalCena(item.dieta.cena)}
                <Link to={`/plan-nutricional/${item._id}`}>
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
    console.log(this.state)
    return(
      <div>
      <div style={{width: '50%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
          <h1>{this.state.MyData.nombre}</h1>
      </div>
      <div style={{width: '50%', float: "right", height:'25%', margin:'2em 0 3em 0'}}>
            <h3>{this.state.MyData.titulo}</h3>
            <p>No. cédula: {this.state.MyData.cedula}</p>
            <p>{this.state.MyData.descripcion}</p>
            <p>Rating: {this.state.MyData.rating} - Número de dietas: {this.state.Dietas.length}</p>
      </div>
      <div style={{width: '100%', float: "left", height:'25%', margin:'3em 0 5em 0'}}>
        <Link to={`/mis-servicios/actualiza-info/${this.state.MyData._id}`}>
          <Button>Actualizar usuario</Button>  
        </Link>
      </div>
      {this.dietas()}
    </div>
    )
  }
}

export default Regreso;