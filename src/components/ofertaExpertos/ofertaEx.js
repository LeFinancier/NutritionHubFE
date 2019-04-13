import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {List, Card, Rate, Button} from 'antd';

class Oferta extends Component{
  constructor (props) {
    super(props)
    this.state = {
      MyData: []
    }
  }

  getAllData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/oferta`, {withCredentials:true})
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
        <h1>Oferta de Nutriólogos</h1>
        <List
          grid={{
            gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5
          }}
          dataSource={this.state.MyData}
          renderItem={item => (
            <List.Item>
              <Card title={item.nombre}>
                <p>Título: {item.titulo}</p>
                <p>Cédula: {item.cedula}</p>
                <p>{item.descripcion}</p>
                <Rate allowHalf disabled value={item.rating}/> 
                <p>{item.dietas.length} clientes</p>
                <Link to={`/cita/${item._id}`}>
                  <Button>Hacer cita</Button>
                </Link>
              </Card>
            </List.Item>
          )}
          />
      </div>
    )
  }

}

export default Oferta;
