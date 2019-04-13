import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Button, Icon} from 'antd';
import AuthService from '../auth/auth-service';

const SubMenu = Menu.SubMenu;

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {loggedInUser: null, collapsed: false};
    this.service = new AuthService();
  }

  static getDerivedStateFromProps(nextProps, props){
    return {
      loggedInUser: nextProps["userInSession"]
    }
  }
  
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logoutUser = () => {
    this.service.logout()
    .then(() => {
      this.setState({
        loggedInUser: null
      });
      this.props.getUser(null);
    })
  }

  checkExpert = () => {
    if(this.state.loggedInUser.tipo === 'Nutriologo') {
      return (
        <Menu
        mode="horizontal"
        theme="light"
      >
        <SubMenu key="sub1"
          title={<span>Hola {this.state.loggedInUser.username} <Icon type="smile"/></span>}
        ></SubMenu>
        <SubMenu key="sub2"
          title={              
          <Link to="/mis-datos" style={{textDecoration: 'none'}}>
          Mis Datos
          </Link>
        }></SubMenu>
        <SubMenu key="sub3"
          title={              
          <Link to="/mis-servicios" style={{textDecoration: 'none'}}>
          Mi Consultorio
          </Link>
        }></SubMenu>
        <SubMenu key="sub5"
          title={              
          <Link to="/oferta" style={{textDecoration: 'none'}}>
          Nutriólogos
          </Link>
        }></SubMenu>
        <SubMenu key="sub6"
          title={              
          <Link to="/cocinas" style={{textDecoration: 'none'}}>
          Alimentos
          </Link>
        }></SubMenu>
        <SubMenu key="sub7"
          title={
            <Link to="/">
              <Button icon="logout" onClick={() => this.logoutUser()}>Logout</Button>
            </Link>
          }></SubMenu>
      </Menu>
      )
    } else if (this.state.loggedInUser.tipo === 'Cocina') {
      return (
        <Menu
        mode="horizontal"
        theme="light"
      >
        <SubMenu key="sub1"
          title={<span>Hola {this.state.loggedInUser.username} <Icon type="smile"/></span>}
        ></SubMenu>
        <SubMenu key="sub2"
          title={              
          <Link to="/mis-datos" style={{textDecoration: 'none'}}>
          Mis Datos
          </Link>
        }></SubMenu>
        <SubMenu key="sub4"
          title={              
          <Link to="/mi-cocina" style={{textDecoration: 'none'}}>
          Mi Cocina
          </Link>
        }></SubMenu>
        <SubMenu key="sub5"
          title={              
          <Link to="/oferta" style={{textDecoration: 'none'}}>
          Nutriólogos
          </Link>
        }></SubMenu>
        <SubMenu key="sub6"
          title={              
          <Link to="/cocinas" style={{textDecoration: 'none'}}>
          Alimentos
          </Link>
        }></SubMenu>
        <SubMenu key="sub7"
          title={
            <Link to="/">
              <Button icon="logout" onClick={() => this.logoutUser()}>Logout</Button>
            </Link>
          }></SubMenu>
      </Menu>
      )
    } else if (this.state.loggedInUser.tipo === 'Todos') {
      return (
        <Menu
        mode="horizontal"
        theme="light"
      >
        <SubMenu key="sub1"
          title={<span>Hola {this.state.loggedInUser.username} <Icon type="smile"/></span>}
        ></SubMenu>
        <SubMenu key="sub2"
          title={              
          <Link to="/mis-datos" style={{textDecoration: 'none'}}>
          Mis Datos
          </Link>
          }></SubMenu>
        <SubMenu key="sub3"
          title={              
          <Link to="/mis-servicios" style={{textDecoration: 'none'}}>
          Mi Consultorio
          </Link>
        }></SubMenu>
        <SubMenu key="sub4"
          title={              
          <Link to="/mi-cocina" style={{textDecoration: 'none'}}>
          Mi Cocina
          </Link>
        }></SubMenu>
        <SubMenu key="sub5"
          title={              
          <Link to="/oferta" style={{textDecoration: 'none'}}>
          Nutriólogos
          </Link>
        }></SubMenu>
        <SubMenu key="sub6"
          title={              
          <Link to="/cocinas" style={{textDecoration: 'none'}}>
          Alimentos
          </Link>
        }></SubMenu>
        <SubMenu key="sub7"
          title={
            <Link to="/">
              <Button icon="logout" onClick={() => this.logoutUser()}>Logout</Button>
            </Link>
          }></SubMenu>
      </Menu>
      )
    } else {
      return (
        <Menu
        mode="horizontal"
        theme="light"
      >
        <SubMenu key="sub1"
          title={<span>Hola {this.state.loggedInUser.username} <Icon type="smile"/></span>}
        ></SubMenu>
        <SubMenu key="sub2"
          title={              
          <Link to="/mis-datos" style={{textDecoration: 'none'}}>
          Mis Datos
          </Link>
          }></SubMenu>
        <SubMenu key="sub5"
          title={              
          <Link to="/oferta" style={{textDecoration: 'none'}}>
          Nutriólogos
          </Link>
        }></SubMenu>
        <SubMenu key="sub6"
          title={              
          <Link to="/cocinas" style={{textDecoration: 'none'}}>
          Alimentos
          </Link>
        }></SubMenu>
        <SubMenu key="sub7"
          title={
            <Link to="/">
              <Button icon="logout" onClick={() => this.logoutUser()}>Logout</Button>
            </Link>
          }></SubMenu>
      </Menu>
      )
    }
  }

  render(){ 
    if(this.state.loggedInUser){
      return (
        <div>
            {this.checkExpert()}
        </div>
        )
      } else {
        return(
          <div>
            <Menu
              mode="horizontal"
              theme="light"
            >
              <SubMenu key="sub8"
                title={
                  <Link to='/' style={{textDecoration: 'none'}}>
                    <Button icon="login">Login</Button>
                  </Link>
                }></SubMenu>
              <SubMenu key="sub7"
                title={
                  <Link to='/signup' style={{textDecoration: 'none'}}>
                    <Button icon="user-add">Signup</Button>
                  </Link>
                }></SubMenu>
            </Menu>
          </div>
        )
      }
  }
}

export default Navbar;