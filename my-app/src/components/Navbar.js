import React from 'react';
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/Projects">Proyectos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AboutMe">Sobre mi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects">Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">Contacto</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/CV">CV</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}