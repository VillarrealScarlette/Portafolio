import React from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{
          height: "90px",
      }}>
        <Navbar light expand="md">
          <NavbarBrand href="/Home"
          style={{
          fontFamily: "Iowan Old Style",
          fontStyle: "normal",
          fontWeight: 900,
          color: "#111C11" 
          }}>scarlette villarreal ávila</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Home">INICIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/AboutMe">SOBRE MI</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Projects">PROYECTOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Contact">CONTACTO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/CV">CV</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}