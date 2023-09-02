import { Fragment } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
              <Nav.Item>
                <Link
                  className='nav-link'
                  to='/'
                >
                  Home
                </Link>
              </Nav.Item>
              {false && <Nav.Link href='#about'>About</Nav.Link>}
              <NavDropdown
                title='Reglamento'
                id='cer-navbar-dropdown'
              >
                <NavDropdown.Item>
                  <Link
                    className='dropdown-item'
                    to='/epcalculator'
                  >
                    Equipos a Presión
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className='dropdown-item'
                    to='/tmCO2Calculator'
                  >
                    Calculadora TmCO2
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
