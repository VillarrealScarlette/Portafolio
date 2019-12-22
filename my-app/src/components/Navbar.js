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
          <NavbarBrand href="/"
          style={{
          fontFamily: "Iowan Old Style",
          fontStyle: "normal",
          fontWeight: 900,
          color: "#111C11",
          marginLeft: "110px",
          }}>scarlette villarreal ávila</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">INICIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AboutMe">SOBRE MI</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Proyectos">PROYECTOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contacto">CONTACTO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="CV" 
                href="https://drive.google.com/drive/folders/1wuD4x463IJtCskaEPrc_FfV-NTGiXR33?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                >
                CV</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <nav style={{
          width: "80px",
          height: "150px",
          marginTop: "455px"
        }}>
          <ul style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            padding: "0px 5px 0px 30px",
          }}>
            <a className="nounderline github-icon padding" href="https://github.com/VillarrealScarlette" target="_blank" rel="noopener noreferrer"><button className="github icon"></button></a>
            <a className="nounderline linkedin-icon padding" href="https://www.linkedin.com/in/scarlettevillarreal/" target="_blank" rel="noopener noreferrer"><button className="linkedin icon"></button></a>
         </ul>
        </nav>
      </div>
    );
  }
}