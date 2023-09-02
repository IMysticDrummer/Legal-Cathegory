import { Fragment } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function CerNavbar({ children, menus, ...props }) {
  return (
    <Fragment>
      <Navbar
        bg='light'
        expand='lg'
      >
        <Container>
          <Navbar.Brand href='/'>C.E.R</Navbar.Brand>
          <Navbar.Toggle aria-controls='cer-navbar' />
          <Navbar.Collapse id='cer-navbar'>
            <Nav className='cer-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              {false && <Nav.Link href='#about'>About</Nav.Link>}
              <NavDropdown
                title='Reglamento'
                id='cer-navbar-dropdown'
              >
                <NavDropdown.Item href='/epcalculator'>
                  Equipos a Presión
                </NavDropdown.Item>
                <NavDropdown.Item href='/tmCO2Calculator'>
                  Calculadora TmCO2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
