import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {List, Card, Rate, Button} from 'antd';

class Cocina extends Component{
  constructor (props) {
    super(props)
    this.state = {
      MyData: []
    }
  }

  getAllData = () => {
    axios.get(`http://localhost:5000/api/cocinas`, {withCredentials:true})
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
        <h1>Proveedores de alimentos</h1>
        <List
          grid={{
            gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5
          }}
          dataSource={this.state.MyData}
          renderItem={item => (
            <List.Item>
              <Card title={item.nombre}>
                <p>{item.descripcion}</p>
                <p>Dirección: {item.direccion}</p>
                <p>{item.condicionesEntrega}</p>
                <Rate allowHalf disabled value={Number(item.rating)}/> 
                <p>{item.pedidos.length} clientes</p>
                <Link to={`/solicitud/${item._id}`}>
                  <Button>Solicitar alimentos</Button>
                </Link>
              </Card>
            </List.Item>
          )}
          />
      </div>
    )
  }

}

export default Cocina;
